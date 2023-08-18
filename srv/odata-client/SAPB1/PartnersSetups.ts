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
import type { PartnersSetupsApi } from './PartnersSetupsApi';
import { Relationships, RelationshipsType } from './Relationships';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

/**
 * This class represents the entity "PartnersSetups" of service "SAPB1".
 */
export class PartnersSetups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PartnersSetupsType<T>
{
  /**
   * Technical entity name for PartnersSetups.
   */
  static _entityName = 'PartnersSetups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the PartnersSetups entity
   */
  static _keys = ['PartnerID'];
  /**
   * Partner Id.
   */
  partnerId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Relationship.
   * @nullable
   */
  defaultRelationship?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Related Bp.
   * @nullable
   */
  relatedBp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Relationships} entity.
   */
  relationship?: Relationships<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;

  constructor(readonly _entityApi: PartnersSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface PartnersSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partnerId: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  defaultRelationship?: DeserializedType<T, 'Edm.Int32'> | null;
  relatedBp?: DeserializedType<T, 'Edm.String'> | null;
  details?: DeserializedType<T, 'Edm.String'> | null;
  relationship?: RelationshipsType<T> | null;
  businessPartner?: BusinessPartnersType<T> | null;
}
