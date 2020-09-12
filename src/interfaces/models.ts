export interface modelV1 {
  firstName: string;
  lastName: string;
  clientId: string;
}

export interface responseV1 {
  statusCode: number;
  data: modelV1;
}
