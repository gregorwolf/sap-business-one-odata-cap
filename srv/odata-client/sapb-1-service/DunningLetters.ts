/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DunningLettersRequestBuilder } from './DunningLettersRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DunningLetters" of service "SAPB1".
 */
export class DunningLetters extends EntityV4 implements DunningLettersType {
  /**
   * Technical entity name for DunningLetters.
   */
  static _entityName = 'DunningLetters';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Fee Currency.
   * @nullable
   */
  feeCurrency?: string;
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: number;
  /**
   * Letter Format.
   * @nullable
   */
  letterFormat?: string;
  /**
   * Effectiveafter.
   * @nullable
   */
  effectiveafter?: string;
  /**
   * Minimum Balance Currency.
   * @nullable
   */
  minimumBalanceCurrency?: string;
  /**
   * Feeperletter.
   * @nullable
   */
  feeperletter?: number;
  /**
   * Calc Interest.
   * @nullable
   */
  calcInterest?: BoYesNoEnum;
  /**
   * Minimum Balance.
   * @nullable
   */
  minimumBalance?: number;
  /**
   * One-to-many navigation property to the [[BusinessPartners]] entity.
   */
  businessPartners!: BusinessPartners[];

  /**
   * Returns an entity builder to construct instances of `DunningLetters`.
   * @returns A builder that constructs instances of entity type `DunningLetters`.
   */
  static builder(): EntityBuilderType<DunningLetters, DunningLettersType> {
    return EntityV4.entityBuilder(DunningLetters);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DunningLetters` entity type.
   * @returns A `DunningLetters` request builder.
   */
  static requestBuilder(): DunningLettersRequestBuilder {
    return new DunningLettersRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DunningLetters`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DunningLetters`.
   */
  static customField(fieldName: string): CustomFieldV4<DunningLetters> {
    return EntityV4.customFieldSelector(fieldName, DunningLetters);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

export interface DunningLettersType {
  feeCurrency?: string | null;
  rowNumber?: number | null;
  letterFormat?: string | null;
  effectiveafter?: string | null;
  minimumBalanceCurrency?: string | null;
  feeperletter?: number | null;
  calcInterest?: BoYesNoEnum | null;
  minimumBalance?: number | null;
  businessPartners: BusinessPartnersType[];
}

export namespace DunningLetters {
  /**
   * Static representation of the [[feeCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEE_CURRENCY: StringField<DunningLetters> = new StringField('FeeCurrency', DunningLetters, 'Edm.String');
  /**
   * Static representation of the [[rowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROW_NUMBER: NumberField<DunningLetters> = new NumberField('RowNumber', DunningLetters, 'Edm.Int32');
  /**
   * Static representation of the [[letterFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LETTER_FORMAT: StringField<DunningLetters> = new StringField('LetterFormat', DunningLetters, 'Edm.String');
  /**
   * Static representation of the [[effectiveafter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVEAFTER: StringField<DunningLetters> = new StringField('Effectiveafter', DunningLetters, 'Edm.String');
  /**
   * Static representation of the [[minimumBalanceCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINIMUM_BALANCE_CURRENCY: StringField<DunningLetters> = new StringField('MinimumBalanceCurrency', DunningLetters, 'Edm.String');
  /**
   * Static representation of the [[feeperletter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEEPERLETTER: NumberField<DunningLetters> = new NumberField('Feeperletter', DunningLetters, 'Edm.Double');
  /**
   * Static representation of the [[calcInterest]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALC_INTEREST: EnumField<DunningLetters> = new EnumField('CalcInterest', DunningLetters);
  /**
   * Static representation of the [[minimumBalance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINIMUM_BALANCE: NumberField<DunningLetters> = new NumberField('MinimumBalance', DunningLetters, 'Edm.Double');
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<DunningLetters, BusinessPartners> = new OneToManyLink('BusinessPartners', DunningLetters, BusinessPartners);
  /**
   * All fields of the DunningLetters entity.
   */
  export const _allFields: Array<StringField<DunningLetters> | NumberField<DunningLetters> | EnumField<DunningLetters> | OneToManyLink<DunningLetters, BusinessPartners>> = [
    DunningLetters.FEE_CURRENCY,
    DunningLetters.ROW_NUMBER,
    DunningLetters.LETTER_FORMAT,
    DunningLetters.EFFECTIVEAFTER,
    DunningLetters.MINIMUM_BALANCE_CURRENCY,
    DunningLetters.FEEPERLETTER,
    DunningLetters.CALC_INTEREST,
    DunningLetters.MINIMUM_BALANCE,
    DunningLetters.BUSINESS_PARTNERS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DunningLetters> = new AllFields('*', DunningLetters);
  /**
   * All key fields of the DunningLetters entity.
   */
  export const _keyFields: Array<Field<DunningLetters>> = [DunningLetters.ROW_NUMBER];
  /**
   * Mapping of all key field names to the respective static field property DunningLetters.
   */
  export const _keys: { [keys: string]: Field<DunningLetters> } = DunningLetters._keyFields.reduce((acc: { [keys: string]: Field<DunningLetters> }, field: Field<DunningLetters>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
