/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOpportunityInterestsSetupRequestBuilder } from './SalesOpportunityInterestsSetupRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SalesOpportunityInterestsSetup" of service "SAPB1".
 */
export class SalesOpportunityInterestsSetup extends EntityV4 implements SalesOpportunityInterestsSetupType {
  /**
   * Technical entity name for SalesOpportunityInterestsSetup.
   */
  static _entityName = 'SalesOpportunityInterestsSetup';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: number;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Sort.
   * @nullable
   */
  sort?: number;
  /**
   * One-to-many navigation property to the [[SalesOpportunities]] entity.
   */
  salesOpportunities!: SalesOpportunities[];

  /**
   * Returns an entity builder to construct instances of `SalesOpportunityInterestsSetup`.
   * @returns A builder that constructs instances of entity type `SalesOpportunityInterestsSetup`.
   */
  static builder(): EntityBuilderType<SalesOpportunityInterestsSetup, SalesOpportunityInterestsSetupType> {
    return EntityV4.entityBuilder(SalesOpportunityInterestsSetup);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SalesOpportunityInterestsSetup` entity type.
   * @returns A `SalesOpportunityInterestsSetup` request builder.
   */
  static requestBuilder(): SalesOpportunityInterestsSetupRequestBuilder {
    return new SalesOpportunityInterestsSetupRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesOpportunityInterestsSetup`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SalesOpportunityInterestsSetup`.
   */
  static customField(fieldName: string): CustomFieldV4<SalesOpportunityInterestsSetup> {
    return EntityV4.customFieldSelector(fieldName, SalesOpportunityInterestsSetup);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SalesOpportunities, SalesOpportunitiesType } from './SalesOpportunities';

export interface SalesOpportunityInterestsSetupType {
  sequenceNo?: number | null;
  description?: string | null;
  sort?: number | null;
  salesOpportunities: SalesOpportunitiesType[];
}

export namespace SalesOpportunityInterestsSetup {
  /**
   * Static representation of the [[sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_NO: NumberField<SalesOpportunityInterestsSetup> = new NumberField('SequenceNo', SalesOpportunityInterestsSetup, 'Edm.Int32');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<SalesOpportunityInterestsSetup> = new StringField('Description', SalesOpportunityInterestsSetup, 'Edm.String');
  /**
   * Static representation of the [[sort]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SORT: NumberField<SalesOpportunityInterestsSetup> = new NumberField('Sort', SalesOpportunityInterestsSetup, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITIES: OneToManyLink<SalesOpportunityInterestsSetup, SalesOpportunities> = new OneToManyLink('SalesOpportunities', SalesOpportunityInterestsSetup, SalesOpportunities);
  /**
   * All fields of the SalesOpportunityInterestsSetup entity.
   */
  export const _allFields: Array<NumberField<SalesOpportunityInterestsSetup> | StringField<SalesOpportunityInterestsSetup> | OneToManyLink<SalesOpportunityInterestsSetup, SalesOpportunities>> = [
    SalesOpportunityInterestsSetup.SEQUENCE_NO,
    SalesOpportunityInterestsSetup.DESCRIPTION,
    SalesOpportunityInterestsSetup.SORT,
    SalesOpportunityInterestsSetup.SALES_OPPORTUNITIES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SalesOpportunityInterestsSetup> = new AllFields('*', SalesOpportunityInterestsSetup);
  /**
   * All key fields of the SalesOpportunityInterestsSetup entity.
   */
  export const _keyFields: Array<Field<SalesOpportunityInterestsSetup>> = [SalesOpportunityInterestsSetup.SEQUENCE_NO];
  /**
   * Mapping of all key field names to the respective static field property SalesOpportunityInterestsSetup.
   */
  export const _keys: { [keys: string]: Field<SalesOpportunityInterestsSetup> } = SalesOpportunityInterestsSetup._keyFields.reduce((acc: { [keys: string]: Field<SalesOpportunityInterestsSetup> }, field: Field<SalesOpportunityInterestsSetup>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
