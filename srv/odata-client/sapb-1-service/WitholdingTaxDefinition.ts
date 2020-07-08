/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WitholdingTaxDefinitionRequestBuilder } from './WitholdingTaxDefinitionRequestBuilder';
import { WtdEffectiveDate, WtdEffectiveDateField } from './WtdEffectiveDate';
import { Wtdbp, WtdbpField } from './Wtdbp';
import { WtdItem, WtdItemField } from './WtdItem';
import { WtdFreight, WtdFreightField } from './WtdFreight';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "WitholdingTaxDefinition" of service "SAPB1".
 */
export class WitholdingTaxDefinition extends Entity implements WitholdingTaxDefinitionType {
  /**
   * Technical entity name for WitholdingTaxDefinition.
   */
  static _entityName = 'WitholdingTaxDefinition';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for WitholdingTaxDefinition.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * W Tax Code.
   * @nullable
   */
  wTaxCode?: string;
  /**
   * W Tax Name.
   * @nullable
   */
  wTaxName?: string;
  /**
   * Formula Id.
   * @nullable
   */
  formulaId?: number;
  /**
   * Official Code.
   * @nullable
   */
  officialCode?: string;
  /**
   * Type.
   * @nullable
   */
  type?: number;
  /**
   * Min Amount.
   * @nullable
   */
  minAmount?: number;
  /**
   * Base Amount Prct.
   * @nullable
   */
  baseAmountPrct?: number;
  /**
   * Wtd Effective Date Collection.
   * @nullable
   */
  wtdEffectiveDateCollection?: WtdEffectiveDate[];
  /**
   * Wtdbp Collection.
   * @nullable
   */
  wtdbpCollection?: Wtdbp[];
  /**
   * Wtd Item Collection.
   * @nullable
   */
  wtdItemCollection?: WtdItem[];
  /**
   * Wtd Freight Collection.
   * @nullable
   */
  wtdFreightCollection?: WtdFreight[];

  /**
   * Returns an entity builder to construct instances `WitholdingTaxDefinition`.
   * @returns A builder that constructs instances of entity type `WitholdingTaxDefinition`.
   */
  static builder(): EntityBuilderType<WitholdingTaxDefinition, WitholdingTaxDefinitionTypeForceMandatory> {
    return Entity.entityBuilder(WitholdingTaxDefinition);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WitholdingTaxDefinition` entity type.
   * @returns A `WitholdingTaxDefinition` request builder.
   */
  static requestBuilder(): WitholdingTaxDefinitionRequestBuilder {
    return new WitholdingTaxDefinitionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WitholdingTaxDefinition`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WitholdingTaxDefinition`.
   */
  static customField(fieldName: string): CustomField<WitholdingTaxDefinition> {
    return Entity.customFieldSelector(fieldName, WitholdingTaxDefinition);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface WitholdingTaxDefinitionType {
  absEntry?: number;
  wTaxCode?: string;
  wTaxName?: string;
  formulaId?: number;
  officialCode?: string;
  type?: number;
  minAmount?: number;
  baseAmountPrct?: number;
  wtdEffectiveDateCollection?: WtdEffectiveDate[];
  wtdbpCollection?: Wtdbp[];
  wtdItemCollection?: WtdItem[];
  wtdFreightCollection?: WtdFreight[];
}

export interface WitholdingTaxDefinitionTypeForceMandatory {
  absEntry: number;
  wTaxCode: string;
  wTaxName: string;
  formulaId: number;
  officialCode: string;
  type: number;
  minAmount: number;
  baseAmountPrct: number;
  wtdEffectiveDateCollection: WtdEffectiveDate[];
  wtdbpCollection: Wtdbp[];
  wtdItemCollection: WtdItem[];
  wtdFreightCollection: WtdFreight[];
}

export namespace WitholdingTaxDefinition {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<WitholdingTaxDefinition> = new NumberField('AbsEntry', WitholdingTaxDefinition, 'Edm.Int32');
  /**
   * Static representation of the [[wTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const W_TAX_CODE: StringField<WitholdingTaxDefinition> = new StringField('WTaxCode', WitholdingTaxDefinition, 'Edm.String');
  /**
   * Static representation of the [[wTaxName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const W_TAX_NAME: StringField<WitholdingTaxDefinition> = new StringField('WTaxName', WitholdingTaxDefinition, 'Edm.String');
  /**
   * Static representation of the [[formulaId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMULA_ID: NumberField<WitholdingTaxDefinition> = new NumberField('FormulaID', WitholdingTaxDefinition, 'Edm.Int32');
  /**
   * Static representation of the [[officialCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFICIAL_CODE: StringField<WitholdingTaxDefinition> = new StringField('OfficialCode', WitholdingTaxDefinition, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: NumberField<WitholdingTaxDefinition> = new NumberField('Type', WitholdingTaxDefinition, 'Edm.Int32');
  /**
   * Static representation of the [[minAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIN_AMOUNT: NumberField<WitholdingTaxDefinition> = new NumberField('MinAmount', WitholdingTaxDefinition, 'Edm.Double');
  /**
   * Static representation of the [[baseAmountPrct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_AMOUNT_PRCT: NumberField<WitholdingTaxDefinition> = new NumberField('BaseAmountPrct', WitholdingTaxDefinition, 'Edm.Double');
  /**
   * Static representation of the [[wtdEffectiveDateCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WTD_EFFECTIVE_DATE_COLLECTION: CollectionField<WitholdingTaxDefinition> = new CollectionField('WTDEffectiveDateCollection', WitholdingTaxDefinition, new WtdEffectiveDateField('', WitholdingTaxDefinition));
  /**
   * Static representation of the [[wtdbpCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WTDBP_COLLECTION: CollectionField<WitholdingTaxDefinition> = new CollectionField('WTDBPCollection', WitholdingTaxDefinition, new WtdbpField('', WitholdingTaxDefinition));
  /**
   * Static representation of the [[wtdItemCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WTD_ITEM_COLLECTION: CollectionField<WitholdingTaxDefinition> = new CollectionField('WTDItemCollection', WitholdingTaxDefinition, new WtdItemField('', WitholdingTaxDefinition));
  /**
   * Static representation of the [[wtdFreightCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WTD_FREIGHT_COLLECTION: CollectionField<WitholdingTaxDefinition> = new CollectionField('WTDFreightCollection', WitholdingTaxDefinition, new WtdFreightField('', WitholdingTaxDefinition));
  /**
   * All fields of the WitholdingTaxDefinition entity.
   */
  export const _allFields: Array<NumberField<WitholdingTaxDefinition> | StringField<WitholdingTaxDefinition> | CollectionField<WitholdingTaxDefinition>> = [
    WitholdingTaxDefinition.ABS_ENTRY,
    WitholdingTaxDefinition.W_TAX_CODE,
    WitholdingTaxDefinition.W_TAX_NAME,
    WitholdingTaxDefinition.FORMULA_ID,
    WitholdingTaxDefinition.OFFICIAL_CODE,
    WitholdingTaxDefinition.TYPE,
    WitholdingTaxDefinition.MIN_AMOUNT,
    WitholdingTaxDefinition.BASE_AMOUNT_PRCT,
    WitholdingTaxDefinition.WTD_EFFECTIVE_DATE_COLLECTION,
    WitholdingTaxDefinition.WTDBP_COLLECTION,
    WitholdingTaxDefinition.WTD_ITEM_COLLECTION,
    WitholdingTaxDefinition.WTD_FREIGHT_COLLECTION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WitholdingTaxDefinition> = new AllFields('*', WitholdingTaxDefinition);
  /**
   * All key fields of the WitholdingTaxDefinition entity.
   */
  export const _keyFields: Array<Field<WitholdingTaxDefinition>> = [WitholdingTaxDefinition.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property WitholdingTaxDefinition.
   */
  export const _keys: { [keys: string]: Field<WitholdingTaxDefinition> } = WitholdingTaxDefinition._keyFields.reduce((acc: { [keys: string]: Field<WitholdingTaxDefinition> }, field: Field<WitholdingTaxDefinition>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
