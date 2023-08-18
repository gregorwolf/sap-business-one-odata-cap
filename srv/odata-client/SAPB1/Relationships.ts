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
import type { RelationshipsApi } from './RelationshipsApi';
import { PartnersSetups, PartnersSetupsType } from './PartnersSetups';

/**
 * This class represents the entity "Relationships" of service "SAPB1".
 */
export class Relationships<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RelationshipsType<T>
{
  /**
   * Technical entity name for Relationships.
   */
  static _entityName = 'Relationships';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Relationships entity
   */
  static _keys = ['RelationshipCode'];
  /**
   * Relationship Description.
   * @nullable
   */
  relationshipDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relationship Code.
   */
  relationshipCode!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link PartnersSetups} entity.
   */
  partnersSetups!: PartnersSetups<T>[];

  constructor(readonly _entityApi: RelationshipsApi<T>) {
    super(_entityApi);
  }
}

export interface RelationshipsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  relationshipDescription?: DeserializedType<T, 'Edm.String'> | null;
  relationshipCode: DeserializedType<T, 'Edm.Int32'>;
  partnersSetups: PartnersSetupsType<T>[];
}
