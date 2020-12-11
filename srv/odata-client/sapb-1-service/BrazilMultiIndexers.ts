/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BrazilMultiIndexersRequestBuilder } from './BrazilMultiIndexersRequestBuilder';
import { BrazilMultiIndexerTypes } from './BrazilMultiIndexerTypes';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "BrazilMultiIndexers" of service "SAPB1".
 */
export class BrazilMultiIndexers extends EntityV4 implements BrazilMultiIndexersType {
  /**
   * Technical entity name for BrazilMultiIndexers.
   */
  static _entityName = 'BrazilMultiIndexers';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Id.
   * @nullable
   */
  id?: number;
  /**
   * Indexer Type.
   * @nullable
   */
  indexerType?: BrazilMultiIndexerTypes;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * First Ref Indexer Code.
   * @nullable
   */
  firstRefIndexerCode?: string;
  /**
   * Second Ref Indexer Code.
   * @nullable
   */
  secondRefIndexerCode?: string;
  /**
   * Third Ref Indexer Code.
   * @nullable
   */
  thirdRefIndexerCode?: string;

  /**
   * Returns an entity builder to construct instances of `BrazilMultiIndexers`.
   * @returns A builder that constructs instances of entity type `BrazilMultiIndexers`.
   */
  static builder(): EntityBuilderType<BrazilMultiIndexers, BrazilMultiIndexersType> {
    return EntityV4.entityBuilder(BrazilMultiIndexers);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BrazilMultiIndexers` entity type.
   * @returns A `BrazilMultiIndexers` request builder.
   */
  static requestBuilder(): BrazilMultiIndexersRequestBuilder {
    return new BrazilMultiIndexersRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BrazilMultiIndexers`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BrazilMultiIndexers`.
   */
  static customField(fieldName: string): CustomFieldV4<BrazilMultiIndexers> {
    return EntityV4.customFieldSelector(fieldName, BrazilMultiIndexers);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BrazilMultiIndexersType {
  id?: number | null;
  indexerType?: BrazilMultiIndexerTypes | null;
  code?: string | null;
  description?: string | null;
  firstRefIndexerCode?: string | null;
  secondRefIndexerCode?: string | null;
  thirdRefIndexerCode?: string | null;
}

export namespace BrazilMultiIndexers {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: NumberField<BrazilMultiIndexers> = new NumberField('ID', BrazilMultiIndexers, 'Edm.Int32');
  /**
   * Static representation of the [[indexerType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDEXER_TYPE: EnumField<BrazilMultiIndexers> = new EnumField('IndexerType', BrazilMultiIndexers);
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<BrazilMultiIndexers> = new StringField('Code', BrazilMultiIndexers, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<BrazilMultiIndexers> = new StringField('Description', BrazilMultiIndexers, 'Edm.String');
  /**
   * Static representation of the [[firstRefIndexerCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_REF_INDEXER_CODE: StringField<BrazilMultiIndexers> = new StringField('FirstRefIndexerCode', BrazilMultiIndexers, 'Edm.String');
  /**
   * Static representation of the [[secondRefIndexerCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_REF_INDEXER_CODE: StringField<BrazilMultiIndexers> = new StringField('SecondRefIndexerCode', BrazilMultiIndexers, 'Edm.String');
  /**
   * Static representation of the [[thirdRefIndexerCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THIRD_REF_INDEXER_CODE: StringField<BrazilMultiIndexers> = new StringField('ThirdRefIndexerCode', BrazilMultiIndexers, 'Edm.String');
  /**
   * All fields of the BrazilMultiIndexers entity.
   */
  export const _allFields: Array<NumberField<BrazilMultiIndexers> | EnumField<BrazilMultiIndexers> | StringField<BrazilMultiIndexers>> = [
    BrazilMultiIndexers.ID,
    BrazilMultiIndexers.INDEXER_TYPE,
    BrazilMultiIndexers.CODE,
    BrazilMultiIndexers.DESCRIPTION,
    BrazilMultiIndexers.FIRST_REF_INDEXER_CODE,
    BrazilMultiIndexers.SECOND_REF_INDEXER_CODE,
    BrazilMultiIndexers.THIRD_REF_INDEXER_CODE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BrazilMultiIndexers> = new AllFields('*', BrazilMultiIndexers);
  /**
   * All key fields of the BrazilMultiIndexers entity.
   */
  export const _keyFields: Array<Field<BrazilMultiIndexers>> = [BrazilMultiIndexers.ID];
  /**
   * Mapping of all key field names to the respective static field property BrazilMultiIndexers.
   */
  export const _keys: { [keys: string]: Field<BrazilMultiIndexers> } = BrazilMultiIndexers._keyFields.reduce((acc: { [keys: string]: Field<BrazilMultiIndexers> }, field: Field<BrazilMultiIndexers>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
