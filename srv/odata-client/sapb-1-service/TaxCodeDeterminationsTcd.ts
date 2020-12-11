/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxCodeDeterminationsTcdRequestBuilder } from './TaxCodeDeterminationsTcdRequestBuilder';
import { TaxCodeDeterminationTcdDefaultWt } from './TaxCodeDeterminationTcdDefaultWt';
import { TaxCodeDeterminationTcdByUsage } from './TaxCodeDeterminationTcdByUsage';
import { TaxCodeDeterminationTcdKeyField } from './TaxCodeDeterminationTcdKeyField';
import { TaxCodeDeterminationTcdTypeEnum } from './TaxCodeDeterminationTcdTypeEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TaxCodeDeterminationsTCD" of service "SAPB1".
 */
export class TaxCodeDeterminationsTcd extends EntityV4 implements TaxCodeDeterminationsTcdType {
  /**
   * Technical entity name for TaxCodeDeterminationsTcd.
   */
  static _entityName = 'TaxCodeDeterminationsTCD';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Abs Id.
   * @nullable
   */
  absId?: number;
  /**
   * Tcd Type.
   * @nullable
   */
  tcdType?: TaxCodeDeterminationTcdTypeEnum;
  /**
   * Dft Ar Code.
   * @nullable
   */
  dftArCode?: string;
  /**
   * Dft Ap Code.
   * @nullable
   */
  dftApCode?: string;
  /**
   * Tax Code Determination Tcd Default W Ts.
   * @nullable
   */
  taxCodeDeterminationTcdDefaultWTs?: TaxCodeDeterminationTcdDefaultWt[];
  /**
   * Tax Code Determination Tcd By Usages.
   * @nullable
   */
  taxCodeDeterminationTcdByUsages?: TaxCodeDeterminationTcdByUsage[];
  /**
   * Tax Code Determination Tcd Key Fields.
   * @nullable
   */
  taxCodeDeterminationTcdKeyFields?: TaxCodeDeterminationTcdKeyField[];

  /**
   * Returns an entity builder to construct instances of `TaxCodeDeterminationsTcd`.
   * @returns A builder that constructs instances of entity type `TaxCodeDeterminationsTcd`.
   */
  static builder(): EntityBuilderType<TaxCodeDeterminationsTcd, TaxCodeDeterminationsTcdType> {
    return EntityV4.entityBuilder(TaxCodeDeterminationsTcd);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TaxCodeDeterminationsTcd` entity type.
   * @returns A `TaxCodeDeterminationsTcd` request builder.
   */
  static requestBuilder(): TaxCodeDeterminationsTcdRequestBuilder {
    return new TaxCodeDeterminationsTcdRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TaxCodeDeterminationsTcd`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TaxCodeDeterminationsTcd`.
   */
  static customField(fieldName: string): CustomFieldV4<TaxCodeDeterminationsTcd> {
    return EntityV4.customFieldSelector(fieldName, TaxCodeDeterminationsTcd);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface TaxCodeDeterminationsTcdType {
  absId?: number | null;
  tcdType?: TaxCodeDeterminationTcdTypeEnum | null;
  dftArCode?: string | null;
  dftApCode?: string | null;
  taxCodeDeterminationTcdDefaultWTs?: TaxCodeDeterminationTcdDefaultWt[] | null;
  taxCodeDeterminationTcdByUsages?: TaxCodeDeterminationTcdByUsage[] | null;
  taxCodeDeterminationTcdKeyFields?: TaxCodeDeterminationTcdKeyField[] | null;
}

export namespace TaxCodeDeterminationsTcd {
  /**
   * Static representation of the [[absId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ID: NumberField<TaxCodeDeterminationsTcd> = new NumberField('AbsId', TaxCodeDeterminationsTcd, 'Edm.Int32');
  /**
   * Static representation of the [[tcdType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TCD_TYPE: EnumField<TaxCodeDeterminationsTcd> = new EnumField('TcdType', TaxCodeDeterminationsTcd);
  /**
   * Static representation of the [[dftArCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DFT_AR_CODE: StringField<TaxCodeDeterminationsTcd> = new StringField('DftArCode', TaxCodeDeterminationsTcd, 'Edm.String');
  /**
   * Static representation of the [[dftApCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DFT_AP_CODE: StringField<TaxCodeDeterminationsTcd> = new StringField('DftApCode', TaxCodeDeterminationsTcd, 'Edm.String');
  /**
   * Static representation of the [[taxCodeDeterminationTcdDefaultWTs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_CODE_DETERMINATION_TCD_DEFAULT_W_TS: CollectionField<TaxCodeDeterminationsTcd, TaxCodeDeterminationTcdDefaultWt> = new CollectionField('TaxCodeDeterminationTCDDefaultWTs', TaxCodeDeterminationsTcd, TaxCodeDeterminationTcdDefaultWt);
  /**
   * Static representation of the [[taxCodeDeterminationTcdByUsages]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_CODE_DETERMINATION_TCD_BY_USAGES: CollectionField<TaxCodeDeterminationsTcd, TaxCodeDeterminationTcdByUsage> = new CollectionField('TaxCodeDeterminationTCDByUsages', TaxCodeDeterminationsTcd, TaxCodeDeterminationTcdByUsage);
  /**
   * Static representation of the [[taxCodeDeterminationTcdKeyFields]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_CODE_DETERMINATION_TCD_KEY_FIELDS: CollectionField<TaxCodeDeterminationsTcd, TaxCodeDeterminationTcdKeyField> = new CollectionField('TaxCodeDeterminationTCDKeyFields', TaxCodeDeterminationsTcd, TaxCodeDeterminationTcdKeyField);
  /**
   * All fields of the TaxCodeDeterminationsTcd entity.
   */
  export const _allFields: Array<NumberField<TaxCodeDeterminationsTcd> | EnumField<TaxCodeDeterminationsTcd> | StringField<TaxCodeDeterminationsTcd> | CollectionField<TaxCodeDeterminationsTcd, TaxCodeDeterminationTcdDefaultWt> | CollectionField<TaxCodeDeterminationsTcd, TaxCodeDeterminationTcdByUsage> | CollectionField<TaxCodeDeterminationsTcd, TaxCodeDeterminationTcdKeyField>> = [
    TaxCodeDeterminationsTcd.ABS_ID,
    TaxCodeDeterminationsTcd.TCD_TYPE,
    TaxCodeDeterminationsTcd.DFT_AR_CODE,
    TaxCodeDeterminationsTcd.DFT_AP_CODE,
    TaxCodeDeterminationsTcd.TAX_CODE_DETERMINATION_TCD_DEFAULT_W_TS,
    TaxCodeDeterminationsTcd.TAX_CODE_DETERMINATION_TCD_BY_USAGES,
    TaxCodeDeterminationsTcd.TAX_CODE_DETERMINATION_TCD_KEY_FIELDS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TaxCodeDeterminationsTcd> = new AllFields('*', TaxCodeDeterminationsTcd);
  /**
   * All key fields of the TaxCodeDeterminationsTcd entity.
   */
  export const _keyFields: Array<Field<TaxCodeDeterminationsTcd>> = [TaxCodeDeterminationsTcd.ABS_ID];
  /**
   * Mapping of all key field names to the respective static field property TaxCodeDeterminationsTcd.
   */
  export const _keys: { [keys: string]: Field<TaxCodeDeterminationsTcd> } = TaxCodeDeterminationsTcd._keyFields.reduce((acc: { [keys: string]: Field<TaxCodeDeterminationsTcd> }, field: Field<TaxCodeDeterminationsTcd>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
