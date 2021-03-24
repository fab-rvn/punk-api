import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
	title: {
		margin: theme.spacing(0, 2),
	},
	list: {
		backgroundColor: theme.palette.background.default,
		marginBottom: theme.spacing(2),
		width: '100%',
	},
}));