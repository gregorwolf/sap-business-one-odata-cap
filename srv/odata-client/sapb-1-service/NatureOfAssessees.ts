/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NatureOfAssesseesRequestBuilder } from './NatureOfAssesseesRequestBuilder';
import { AssesseeTypeEnum } from './AssesseeTypeEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "NatureOfAssessees" of service "SAPB1".
 */
export class NatureOfAssessees extends EntityV4 implements NatureOfAssesseesType {
  /**
   * Technical entity name for NatureOfAssessees.
   */
  static _entityName = 'NatureOfAssessees';
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
   * Assessee Type.
   * @nullable
   */
  assesseeType?: AssesseeTypeEnum;
  /**
   * One-to-many navigation property to the [[WithholdingTaxCodes]] entity.
   */
  withholdingTaxCodes!: WithholdingTaxCodes[];

  /**
   * Returns an entity builder to construct instances of `NatureOfAssessees`.
   * @returns A builder that constructs instances of entity type `NatureOfAssessees`.
   */
  static builder(): EntityBuilderType<NatureOfAssessees, NatureOfAssesseesType> {
    return EntityV4.entityBuilder(NatureOfAssessees);
  }

  /**
   * Returns a request builder to construct requests for operations on the `NatureOfAssessees` entity type.
   * @returns A `NatureOfAssessees` request builder.
   */
  static requestBuilder(): NatureOfAssesseesRequestBuilder {
    return new NatureOfAssesseesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `NatureOfAssessees`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `NatureOfAssessees`.
   */
  static customField(fieldName: string): CustomFieldV4<NatureOfAssessees> {
    return EntityV4.customFieldSelector(fieldName, NatureOfAssessees);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { WithholdingTaxCodes, WithholdingTaxCodesType } from './WithholdingTaxCodes';

export interface NatureOfAssesseesType {
  absEntry?: number | null;
  code?: string | null;
  description?: string | null;
  assesseeType?: AssesseeTypeEnum | null;
  withholdingTaxCodes: WithholdingTaxCodesType[];
}

export namespace NatureOfAssessees {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<NatureOfAssessees> = new NumberField('AbsEntry', NatureOfAssessees, 'Edm.Int32');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<NatureOfAssessees> = new StringField('Code', NatureOfAssessees, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<NatureOfAssessees> = new StringField('Description', NatureOfAssessees, 'Edm.String');
  /**
   * Static representation of the [[assesseeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSESSEE_TYPE: EnumField<NatureOfAssessees> = new EnumField('AssesseeType', NatureOfAssessees);
  /**
   * Static representation of the one-to-many navigation property [[withholdingTaxCodes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CODES: OneToManyLink<NatureOfAssessees, WithholdingTaxCodes> = new OneToManyLink('WithholdingTaxCodes', NatureOfAssessees, WithholdingTaxCodes);
  /**
   * All fields of the NatureOfAssessees entity.
   */
  export const _allFields: Array<NumberField<NatureOfAssessees> | StringField<NatureOfAssessees> | EnumField<NatureOfAssessees> | OneToManyLink<NatureOfAssessees, WithholdingTaxCodes>> = [
    NatureOfAssessees.ABS_ENTRY,
    NatureOfAssessees.CODE,
    NatureOfAssessees.DESCRIPTION,
    NatureOfAssessees.ASSESSEE_TYPE,
    NatureOfAssessees.WITHHOLDING_TAX_CODES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<NatureOfAssessees> = new AllFields('*', NatureOfAssessees);
  /**
   * All key fields of the NatureOfAssessees entity.
   */
  export const _keyFields: Array<Field<NatureOfAssessees>> = [NatureOfAssessees.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property NatureOfAssessees.
   */
  export const _keys: { [keys: string]: Field<NatureOfAssessees> } = NatureOfAssessees._keyFields.reduce((acc: { [keys: string]: Field<NatureOfAssessees> }, field: Field<NatureOfAssessees>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
