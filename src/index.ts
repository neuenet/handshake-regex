


///  U T I L

const _regex = "hs1[a-z02-9]{39,87}";



///  E X P O R T

export const handshakeRegex = (suppliedString: string): boolean => {
  if (String(suppliedString).match(new RegExp(`^${_regex}$`)))
    return true;

  return false;
};

export default (suppliedString: string): boolean => handshakeRegex(suppliedString);
