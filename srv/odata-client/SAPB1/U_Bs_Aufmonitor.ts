/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { U_Bs_AufmonitorApi } from './U_Bs_AufmonitorApi';

/**
 * This class represents the entity "U_BS_AUFMONITOR" of service "SAPB1".
 */
export class U_Bs_Aufmonitor<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Bs_AufmonitorType<T>
{
  /**
   * Technical entity name for U_Bs_Aufmonitor.
   */
  static _entityName = 'U_BS_AUFMONITOR';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Bs_Aufmonitor entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Lieferart Id.
   */
  uLieferartId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Zdiffgelb.
   */
  uZdiffgelb!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Zdiffrot.
   */
  uZdiffrot!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Zdiffschwarz.
   */
  uZdiffschwarz!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Asgrenzegelb.
   */
  uAsgrenzegelb!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Asgrenzerot.
   */
  uAsgrenzerot!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Asgrenzeschwarz.
   */
  uAsgrenzeschwarz!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Uhrzeitvorgabe.
   */
  uUhrzeitvorgabe!: DeserializedType<T, 'Edm.TimeOfDay'>;
  /**
   * U Zdiffinfoservice.
   */
  uZdiffinfoservice!: DeserializedType<T, 'Edm.Int32'>;

  constructor(readonly _entityApi: U_Bs_AufmonitorApi<T>) {
    super(_entityApi);
  }
}

export interface U_Bs_AufmonitorType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uLieferartId: DeserializedType<T, 'Edm.Int32'>;
  uZdiffgelb: DeserializedType<T, 'Edm.Int32'>;
  uZdiffrot: DeserializedType<T, 'Edm.Int32'>;
  uZdiffschwarz: DeserializedType<T, 'Edm.Int32'>;
  uAsgrenzegelb: DeserializedType<T, 'Edm.Int32'>;
  uAsgrenzerot: DeserializedType<T, 'Edm.Int32'>;
  uAsgrenzeschwarz: DeserializedType<T, 'Edm.Int32'>;
  uUhrzeitvorgabe: DeserializedType<T, 'Edm.TimeOfDay'>;
  uZdiffinfoservice: DeserializedType<T, 'Edm.Int32'>;
}
