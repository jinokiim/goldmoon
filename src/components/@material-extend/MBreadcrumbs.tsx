import { last } from 'lodash';
// import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Breadcrumbs, BreadcrumbsProps } from '@mui/material';
import { ReactElement } from 'react';

// ----------------------------------------------------------------------

const Separator = (
  <Box
    component="span"
    sx={{
      width: 4,
      height: 4,
      borderRadius: '50%',
      bgcolor: 'text.disabled'
    }}
  />
);

type TLink = {
  href?: string;
  name: string;
  icon?: ReactElement;
};

function LinkItem({ link }: { link: TLink }) {
  const { name, icon } = link;
  return (
    <Box>
      {icon && (
        <Box
          sx={{
            mr: 1,
            '& svg': { width: 20, height: 20 }
          }}
        >
          {icon}
        </Box>
      )}
      {name}
    </Box>
  );
}

export interface MBreadcrumbsProps extends BreadcrumbsProps {
  links: TLink[];
  activeLast?: boolean;
}

export default function MBreadcrumbs({ links, activeLast = false, ...other }: MBreadcrumbsProps) {
  const currentLink = last(links)?.name;

  const listDefault = links.map((link) => <LinkItem key={link.name} link={link} />);
  const listActiveLast = links.map((link) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem link={link} />
      ) : (
        <Typography
          variant="body2"
          sx={{
            maxWidth: 260,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            color: 'text.disabled',
            textOverflow: 'ellipsis'
          }}
        >
          {currentLink}
        </Typography>
      )}
    </div>
  ));

  return (
    <Breadcrumbs separator={Separator} {...other}>
      {activeLast ? listDefault : listActiveLast}
    </Breadcrumbs>
  );
}
