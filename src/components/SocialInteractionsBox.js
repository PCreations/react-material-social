import React from 'react'

import Popover from 'material-ui/lib/popover/popover';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import PlusOneSVG from 'material-ui/lib/svg-icons/social/plus-one';

import SocialToolbar from './SocialToolbar';
import SocialButton from './SocialButton';
import CommentsBox from './CommentsBox';
import Comment from './Comment';
import CommentInput from './CommentInput';
import EditingComment from './EditingComment';
import pureComponent from './pureComponent';

const socialInteractionsBoxStyle = {
    WebkitFontSmoothing: 'antialiased',
    color: '#212121',
    fontFamily: 'Roboto,RobotoDraft,Helvetica,Arial,sans-serif'
}

const socialInteractionsBoxEmptyStyle = {
    maxHeight: 78
}

const socialInteractionsBoxOpenedStyle = {
    maxHeight: 529
}

const socialInteractionsBoxNotOpenedStyle = {
    maxHeight: 128
}

const PurePopover = pureComponent(Popover, 'Popover', ['onRequestClose']);

class SocialInteractionsBox extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SocialInteractionsBox';
        this.state = {
            opened: props.defaultOpened,
            inputCommentOpened: false,
            clickedComment: null,
            popoverOpened: false,
            clickedCommentId: "",
            editingCommentId: "",
            editingCommentText: "",
            inputText: "",
            activeReactionButtons: props.activeReactionButtons
        }
    }
    setClickedComment(e, commentId) {
        this.setState({
            popoverOpened: true,
            clickedComment: e.currentTarget,
            clickedCommentId: commentId,
        });
    }
    handleRequestClose(e) {
        this.setState({
            popoverOpened: false,
            clickedComment: null
        });
    }
    handleEditClick(e, commentId, commentText) {
        this.setState({
            editingCommentId: "",
            editingCommentText: ""
        }, this.props.onEditClick(e, commentId, commentText))
    }
    getCommentTextFromId(id) {
        let comment = this.props.comments.filter(c => c.id == id)[0];
        return comment.text;
    }
    render() {
        let {comments, onCommentButtonClick, props} = this.props;

        let onAddCommentClick = (e) => {
            this.setState({inputCommentOpened: true});
        }

        let onCommentButtonClickCallback = (e) => {
            this.setState({
                opened: true,
                inputCommentOpened: true
            }, onCommentButtonClick(e));
        }

        let commentInputProps = Object.assign({}, this.props.commentInputProps, {
            onAddCommentClick: onAddCommentClick,
            opened: this.state.inputCommentOpened,
            onTextChange: (e) => this.setState({inputText: e.target.value}),
            text: this.state.inputText
        });

        let style = Object.assign(
            {},
            socialInteractionsBoxStyle,
            this.props.style.socialInteractionsBox
        )

        if (this.state.opened) {
            style = {
                ...style,
                ...socialInteractionsBoxOpenedStyle
            }
        } else {
            style = {
                ...style,
                ...socialInteractionsBoxNotOpenedStyle
            }
        }

        if (!this.props.comments) {
            style = {
                ...style,
                ...socialInteractionsBoxEmptyStyle
            }
        }

        comments = this.props.comments.map(c => {
            c.reactionButtonActive = this.state.activeReactionButtons.indexOf(c.id) !== -1
            return c
        })


        return (
            <div style={style}>
                <SocialToolbar
                    reactionIcon={this.props.reactionIcon}
                    reactionButtonActive={this.props.reactionButtonActive}
                    reactionsCount={this.props.reactionsCount}
                    commentsCount={this.props.commentsCount}
                    sharesCount={this.props.sharesCount}
                    onClick={(e) => this.setState({
                        opened: !this.state.opened,
                        inputCommentOpened: false,
                        editingCommentId: '',
                    }, () => this.props.onBoxToggled(this.state.opened)) }
                    onReactionButtonClick={(e) => this.props.onReactionButtonClick(e)}
                    onShareButtonClick={this.props.onShareButtonClick}
                    onCommentButtonClick={onCommentButtonClickCallback}
                    style={this.props.style.socialToolbar}
                    socialButtonsStyle={this.props.style.socialToolbarButton || this.props.style.socialButton}/>
                <CommentsBox
                    onCommentBoxClosedClick={(e) => this.setState({opened: true})}
                    opened={this.state.opened}
                    previewedComment={this.props.previewedComment}
                    comments={comments}
                    reactionIcon={this.props.reactionIcon}
                    onReactionButtonClick={(e, commentId) => {
                        let buttonIndex = this.state.activeReactionButtons.indexOf(commentId)
                        let activeReactionButtons = this.state.activeReactionButtons
                        if (buttonIndex === -1) {
                            activeReactionButtons.push(commentId)
                        }
                        else {
                            activeReactionButtons.splice(buttonIndex, 1);
                        }
                        this.setState({
                            activeReactionButtons: activeReactionButtons
                        }, this.props.onCommentReactionButtonClick(commentId))
                    }}
                    onCommentClick={(e, commentId) => this.setClickedComment(e, commentId)}
                    commentInputProps={{
                        ...commentInputProps,
                        onPublishButtonClick: (e, commentText) => {
                            this.setState({
                                inputCommentOpened: false,
                            }, this.props.onPublishButtonClick(e, commentText))
                        }
                    }}
                    editingCommentId={this.state.editingCommentId}
                    editingCommentText={this.state.editingCommentText}
                    commentPopover={
                        <PurePopover
                            open={this.state.popoverOpened}
                            anchorEl={this.state.clickedComment}
                            anchorOrigin={{
                                horizontal: 'middle',
                                vertical: 'top'
                            }}
                            targetOrigin={{
                                horizontal: 'left',
                                vertical: 'top'
                            }}
                            onRequestClose={(e) => this.handleRequestClose(e)}>
                            <Menu>
                                <MenuItem primaryText="Ajouter +1 à ce commentaire"/>
                                <MenuItem primaryText="Signaler ce commentaire"/>
                                <MenuItem primaryText="Modifier ce commentaire" onClick={(e) => {
                                    this.setState({
                                        popoverOpened: false,
                                        editingCommentId: this.state.clickedCommentId,
                                        editingCommentText: this.getCommentTextFromId(this.state.clickedCommentId)
                                    })
                                }} />
                            </Menu>
                        </PurePopover>
                    }
                    cancelButtonText={this.props.cancelButtonText}
                    editButtonText={this.props.editButtonText}
                    onCancelClick={(e) => this.setState({editingCommentId: ''})}
                    onEditClick={(e, commentId, commentText) => this.handleEditClick(e, commentId, commentText)}
                    onEditingCommentTextChange={(e) => this.setState({editingCommentText: e.target.value})}
                    style={this.props.style.commentsBox}
                    editingCommentStyle={this.props.style.editingComment}
                    commentStyle={this.props.style.comment}/>
            </div>
        );
    }
}

SocialInteractionsBox.propTypes = {
    style: React.PropTypes.shape({
        socialInteractionsBox: React.PropTypes.object,
        socialToolbar: SocialToolbar.propTypes.style,
        socialToolbarButton: SocialButton.propTypes.style,
        commentsBox: CommentsBox.propTypes.style,
        comment: Comment.propTypes.style,
        editingComment: EditingComment.propTypes.style,
        commentInput: CommentInput.propTypes.style,
        socialButton: SocialButton.propTypes.style
    }),
    defaultOpened: React.PropTypes.bool,
    reactionButtonActive: React.PropTypes.bool,
    reactionIcon: React.PropTypes.element,
    reactionsCount: React.PropTypes.number,
    commentsCount: React.PropTypes.number,
    sharesCount: React.PropTypes.number,
    onReactionButtonClick: React.PropTypes.func,
    onCommentButtonClick: React.PropTypes.func,
    onEditClick: React.PropTypes.func,
    onPublishButtonClick: React.PropTypes.func,
    onShareButtonClick: React.PropTypes.func,
    onCommentReactionButtonClick: React.PropTypes.func,
    activeReactionButtons: React.PropTypes.array,
    comments: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        avatar: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        reactionsCount: React.PropTypes.string.isRequired
    })),
    commentInputProps: React.PropTypes.shape({
        avatar: React.PropTypes.string.isRequired,
        addCommentText: React.PropTypes.string.isRequired,
        plubishButtonText: React.PropTypes.string.isRequired,
        opened: React.PropTypes.bool,
        text: React.PropTypes.string
    }),
    previewedComment: CommentsBox.propTypes.previewedComment,
    cancelButtonText: React.PropTypes.string.isRequired,
    editButtonText: React.PropTypes.string.isRequired,
    onBoxOpened: React.PropTypes.func
}

SocialInteractionsBox.defaultProps = {
    style: {
        socialInteractionsBox: {},
        socialToolbar: {},
        socialToolbarButton: {},
        commentsBox: {},
        comment: {},
        editingComment: {},
        commentInput: {},
        socialButton: {}
    },
    activeReactionButtons: [],
    defaultOpened: false,
    reactionButtonActive: false,
    reactionIcon: <PlusOneSVG/>,
    onReactionButtonClick: () => {},
    onCommentButtonClick: () => {},
    onCommentReactionButtonClick: (commentId) => {},
    onBoxToggled: () => {}
}

export default SocialInteractionsBox;