/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WitholdingTaxDefinitionRequestBuilder } from './WitholdingTaxDefinitionRequestBuilder';
import { WtdEffectiveDate } from './WtdEffectiveDate';
import { Wtdbp } from './Wtdbp';
import { WtdItem } from './WtdItem';
import { WtdFreight } from './WtdFreight';
import { BoYesNoEnum } from './BoYesNoEnum';
import { WithholdingTaxCodeCategoryEnum } from './WithholdingTaxCodeCategoryEnum';
import { WithholdingTaxCodeBaseTypeEnum } from './WithholdingTaxCodeBaseTypeEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "WitholdingTaxDefinition" of service "SAPB1".
 */
export class WitholdingTaxDefinition extends EntityV4 implements WitholdingTaxDefinitionType {
  /**
   * Technical entity name for WitholdingTaxDefinition.
   */
  static _entityName = 'WitholdingTaxDefinition';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
   * Inactive.
   * @nullable
   */
  inactive?: BoYesNoEnum;
  /**
   * Official Code.
   * @nullable
   */
  officialCode?: string;
  /**
   * Category.
   * @nullable
   */
  category?: WithholdingTaxCodeCategoryEnum;
  /**
   * Base Type.
   * @nullable
   */
  baseType?: WithholdingTaxCodeBaseTypeEnum;
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
   * Sliding Scale Progressive Tax.
   * @nullable
   */
  slidingScaleProgressiveTax?: BoYesNoEnum;
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
   * Returns an entity builder to construct instances of `WitholdingTaxDefinition`.
   * @returns A builder that constructs instances of entity type `WitholdingTaxDefinition`.
   */
  static builder(): EntityBuilderType<WitholdingTaxDefinition, WitholdingTaxDefinitionType> {
    return EntityV4.entityBuilder(WitholdingTaxDefinition);
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
  static customField(fieldName: string): CustomFieldV4<WitholdingTaxDefinition> {
    return EntityV4.customFieldSelector(fieldName, WitholdingTaxDefinition);
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
  absEntry?: number | null;
  wTaxCode?: string | null;
  wTaxName?: string | null;
  formulaId?: number | null;
  inactive?: BoYesNoEnum | null;
  officialCode?: string | null;
  category?: WithholdingTaxCodeCategoryEnum | null;
  baseType?: WithholdingTaxCodeBaseTypeEnum | null;
  type?: number | null;
  minAmount?: number | null;
  baseAmountPrct?: number | null;
  slidingScaleProgressiveTax?: BoYesNoEnum | null;
  wtdEffectiveDateCollection?: WtdEffectiveDate[] | null;
  wtdbpCollection?: Wtdbp[] | null;
  wtdItemCollection?: WtdItem[] | null;
  wtdFreightCollection?: WtdFreight[] | null;
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
   * Static representation of the [[inactive]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INACTIVE: EnumField<WitholdingTaxDefinition> = new EnumField('Inactive', WitholdingTaxDefinition);
  /**
   * Static representation of the [[officialCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFICIAL_CODE: StringField<WitholdingTaxDefinition> = new StringField('OfficialCode', WitholdingTaxDefinition, 'Edm.String');
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: EnumField<WitholdingTaxDefinition> = new EnumField('Category', WitholdingTaxDefinition);
  /**
   * Static representation of the [[baseType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_TYPE: EnumField<WitholdingTaxDefinition> = new EnumField('BaseType', WitholdingTaxDefinition);
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
   * Static representation of the [[slidingScaleProgressiveTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SLIDING_SCALE_PROGRESSIVE_TAX: EnumField<WitholdingTaxDefinition> = new EnumField('SlidingScaleProgressiveTax', WitholdingTaxDefinition);
  /**
   * Static representation of the [[wtdEffectiveDateCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WTD_EFFECTIVE_DATE_COLLECTION: CollectionField<WitholdingTaxDefinition, WtdEffectiveDate> = new CollectionField('WTDEffectiveDateCollection', WitholdingTaxDefinition, WtdEffectiveDate);
  /**
   * Static representation of the [[wtdbpCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WTDBP_COLLECTION: CollectionField<WitholdingTaxDefinition, Wtdbp> = new CollectionField('WTDBPCollection', WitholdingTaxDefinition, Wtdbp);
  /**
   * Static representation of the [[wtdItemCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WTD_ITEM_COLLECTION: CollectionField<WitholdingTaxDefinition, WtdItem> = new CollectionField('WTDItemCollection', WitholdingTaxDefinition, WtdItem);
  /**
   * Static representation of the [[wtdFreightCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WTD_FREIGHT_COLLECTION: CollectionField<WitholdingTaxDefinition, WtdFreight> = new CollectionField('WTDFreightCollection', WitholdingTaxDefinition, WtdFreight);
  /**
   * All fields of the WitholdingTaxDefinition entity.
   */
  export const _allFields: Array<NumberField<WitholdingTaxDefinition> | StringField<WitholdingTaxDefinition> | EnumField<WitholdingTaxDefinition> | CollectionField<WitholdingTaxDefinition, WtdEffectiveDate> | CollectionField<WitholdingTaxDefinition, Wtdbp> | CollectionField<WitholdingTaxDefinition, WtdItem> | CollectionField<WitholdingTaxDefinition, WtdFreight>> = [
    WitholdingTaxDefinition.ABS_ENTRY,
    WitholdingTaxDefinition.W_TAX_CODE,
    WitholdingTaxDefinition.W_TAX_NAME,
    WitholdingTaxDefinition.FORMULA_ID,
    WitholdingTaxDefinition.INACTIVE,
    WitholdingTaxDefinition.OFFICIAL_CODE,
    WitholdingTaxDefinition.CATEGORY,
    WitholdingTaxDefinition.BASE_TYPE,
    WitholdingTaxDefinition.TYPE,
    WitholdingTaxDefinition.MIN_AMOUNT,
    WitholdingTaxDefinition.BASE_AMOUNT_PRCT,
    WitholdingTaxDefinition.SLIDING_SCALE_PROGRESSIVE_TAX,
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
