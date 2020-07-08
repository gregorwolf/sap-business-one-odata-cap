/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BrazilBeverageIndexersRequestBuilder } from './BrazilBeverageIndexersRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "BrazilBeverageIndexers" of service "SAPB1".
 */
export class BrazilBeverageIndexers extends Entity implements BrazilBeverageIndexersType {
  /**
   * Technical entity name for BrazilBeverageIndexers.
   */
  static _entityName = 'BrazilBeverageIndexers';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BrazilBeverageIndexers.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Beverage Group Code.
   * @nullable
   */
  beverageGroupCode?: string;
  /**
   * Beverage Table Code.
   * @nullable
   */
  beverageTableCode?: string;
  /**
   * Beverage Commercial Brand Code.
   * @nullable
   */
  beverageCommercialBrandCode?: number;
  /**
   * Beverage Id.
   * @nullable
   */
  beverageId?: number;
  /**
   * One-to-one navigation property to the [[BrazilStringIndexers]] entity.
   */
  brazilStringIndexer!: BrazilStringIndexers;
  /**
   * One-to-one navigation property to the [[BrazilNumericIndexers]] entity.
   */
  brazilNumericIndexer!: BrazilNumericIndexers;

  /**
   * Returns an entity builder to construct instances `BrazilBeverageIndexers`.
   * @returns A builder that constructs instances of entity type `BrazilBeverageIndexers`.
   */
  static builder(): EntityBuilderType<BrazilBeverageIndexers, BrazilBeverageIndexersTypeForceMandatory> {
    return Entity.entityBuilder(BrazilBeverageIndexers);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BrazilBeverageIndexers` entity type.
   * @returns A `BrazilBeverageIndexers` request builder.
   */
  static requestBuilder(): BrazilBeverageIndexersRequestBuilder {
    return new BrazilBeverageIndexersRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BrazilBeverageIndexers`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BrazilBeverageIndexers`.
   */
  static customField(fieldName: string): CustomField<BrazilBeverageIndexers> {
    return Entity.customFieldSelector(fieldName, BrazilBeverageIndexers);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BrazilStringIndexers, BrazilStringIndexersType } from './BrazilStringIndexers';
import { BrazilNumericIndexers, BrazilNumericIndexersType } from './BrazilNumericIndexers';

export interface BrazilBeverageIndexersType {
  beverageGroupCode?: string;
  beverageTableCode?: string;
  beverageCommercialBrandCode?: number;
  beverageId?: number;
  brazilStringIndexer: BrazilStringIndexersType;
  brazilNumericIndexer: BrazilNumericIndexersType;
}

export interface BrazilBeverageIndexersTypeForceMandatory {
  beverageGroupCode: string;
  beverageTableCode: string;
  beverageCommercialBrandCode: number;
  beverageId: number;
  brazilStringIndexer: BrazilStringIndexersType;
  brazilNumericIndexer: BrazilNumericIndexersType;
}

export namespace BrazilBeverageIndexers {
  /**
   * Static representation of the [[beverageGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEVERAGE_GROUP_CODE: StringField<BrazilBeverageIndexers> = new StringField('BeverageGroupCode', BrazilBeverageIndexers, 'Edm.String');
  /**
   * Static representation of the [[beverageTableCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEVERAGE_TABLE_CODE: StringField<BrazilBeverageIndexers> = new StringField('BeverageTableCode', BrazilBeverageIndexers, 'Edm.String');
  /**
   * Static representation of the [[beverageCommercialBrandCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEVERAGE_COMMERCIAL_BRAND_CODE: NumberField<BrazilBeverageIndexers> = new NumberField('BeverageCommercialBrandCode', BrazilBeverageIndexers, 'Edm.Int32');
  /**
   * Static representation of the [[beverageId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEVERAGE_ID: NumberField<BrazilBeverageIndexers> = new NumberField('BeverageID', BrazilBeverageIndexers, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[brazilStringIndexer]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRAZIL_STRING_INDEXER: OneToOneLink<BrazilBeverageIndexers, BrazilStringIndexers> = new OneToOneLink('BrazilStringIndexer', BrazilBeverageIndexers, BrazilStringIndexers);
  /**
   * Static representation of the one-to-one navigation property [[brazilNumericIndexer]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRAZIL_NUMERIC_INDEXER: OneToOneLink<BrazilBeverageIndexers, BrazilNumericIndexers> = new OneToOneLink('BrazilNumericIndexer', BrazilBeverageIndexers, BrazilNumericIndexers);
  /**
   * All fields of the BrazilBeverageIndexers entity.
   */
  export const _allFields: Array<StringField<BrazilBeverageIndexers> | NumberField<BrazilBeverageIndexers> | OneToOneLink<BrazilBeverageIndexers, BrazilStringIndexers> | OneToOneLink<BrazilBeverageIndexers, BrazilNumericIndexers>> = [
    BrazilBeverageIndexers.BEVERAGE_GROUP_CODE,
    BrazilBeverageIndexers.BEVERAGE_TABLE_CODE,
    BrazilBeverageIndexers.BEVERAGE_COMMERCIAL_BRAND_CODE,
    BrazilBeverageIndexers.BEVERAGE_ID,
    BrazilBeverageIndexers.BRAZIL_STRING_INDEXER,
    BrazilBeverageIndexers.BRAZIL_NUMERIC_INDEXER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BrazilBeverageIndexers> = new AllFields('*', BrazilBeverageIndexers);
  /**
   * All key fields of the BrazilBeverageIndexers entity.
   */
  export const _keyFields: Array<Field<BrazilBeverageIndexers>> = [BrazilBeverageIndexers.BEVERAGE_ID];
  /**
   * Mapping of all key field names to the respective static field property BrazilBeverageIndexers.
   */
  export const _keys: { [keys: string]: Field<BrazilBeverageIndexers> } = BrazilBeverageIndexers._keyFields.reduce((acc: { [keys: string]: Field<BrazilBeverageIndexers> }, field: Field<BrazilBeverageIndexers>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
