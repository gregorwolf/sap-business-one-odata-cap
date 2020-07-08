/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SectionsRequestBuilder } from './SectionsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "Sections" of service "SAPB1".
 */
export class Sections extends Entity implements SectionsType {
  /**
   * Technical entity name for Sections.
   */
  static _entityName = 'Sections';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Sections.
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
   * E Code.
   * @nullable
   */
  eCode?: string;
  /**
   * One-to-many navigation property to the [[CertificateSeries]] entity.
   */
  certificateSeries!: CertificateSeries[];
  /**
   * One-to-many navigation property to the [[WithholdingTaxCodes]] entity.
   */
  withholdingTaxCodes!: WithholdingTaxCodes[];

  /**
   * Returns an entity builder to construct instances `Sections`.
   * @returns A builder that constructs instances of entity type `Sections`.
   */
  static builder(): EntityBuilderType<Sections, SectionsTypeForceMandatory> {
    return Entity.entityBuilder(Sections);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Sections` entity type.
   * @returns A `Sections` request builder.
   */
  static requestBuilder(): SectionsRequestBuilder {
    return new SectionsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sections`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Sections`.
   */
  static customField(fieldName: string): CustomField<Sections> {
    return Entity.customFieldSelector(fieldName, Sections);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { CertificateSeries, CertificateSeriesType } from './CertificateSeries';
import { WithholdingTaxCodes, WithholdingTaxCodesType } from './WithholdingTaxCodes';

export interface SectionsType {
  absEntry?: number;
  code?: string;
  description?: string;
  eCode?: string;
  certificateSeries: CertificateSeriesType[];
  withholdingTaxCodes: WithholdingTaxCodesType[];
}

export interface SectionsTypeForceMandatory {
  absEntry: number;
  code: string;
  description: string;
  eCode: string;
  certificateSeries: CertificateSeriesType[];
  withholdingTaxCodes: WithholdingTaxCodesType[];
}

export namespace Sections {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<Sections> = new NumberField('AbsEntry', Sections, 'Edm.Int32');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<Sections> = new StringField('Code', Sections, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<Sections> = new StringField('Description', Sections, 'Edm.String');
  /**
   * Static representation of the [[eCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_CODE: StringField<Sections> = new StringField('ECode', Sections, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[certificateSeries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATE_SERIES: OneToManyLink<Sections, CertificateSeries> = new OneToManyLink('CertificateSeries', Sections, CertificateSeries);
  /**
   * Static representation of the one-to-many navigation property [[withholdingTaxCodes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CODES: OneToManyLink<Sections, WithholdingTaxCodes> = new OneToManyLink('WithholdingTaxCodes', Sections, WithholdingTaxCodes);
  /**
   * All fields of the Sections entity.
   */
  export const _allFields: Array<NumberField<Sections> | StringField<Sections> | OneToManyLink<Sections, CertificateSeries> | OneToManyLink<Sections, WithholdingTaxCodes>> = [
    Sections.ABS_ENTRY,
    Sections.CODE,
    Sections.DESCRIPTION,
    Sections.E_CODE,
    Sections.CERTIFICATE_SERIES,
    Sections.WITHHOLDING_TAX_CODES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Sections> = new AllFields('*', Sections);
  /**
   * All key fields of the Sections entity.
   */
  export const _keyFields: Array<Field<Sections>> = [Sections.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property Sections.
   */
  export const _keys: { [keys: string]: Field<Sections> } = Sections._keyFields.reduce((acc: { [keys: string]: Field<Sections> }, field: Field<Sections>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
