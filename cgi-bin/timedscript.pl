#!/usr/bin/perl
use CGI qw(:standard) ;
my $q=CGI -> new;
my $option=$q->param("option");
print "Content-type:text/html\r\n\r\n";
sleep($option);
print "generate a pause for " + $option;
print" Ok, I'm done. Yay";