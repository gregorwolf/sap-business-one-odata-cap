/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOpportunityReasonsSetupRequestBuilder } from './SalesOpportunityReasonsSetupRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "SalesOpportunityReasonsSetup" of service "SAPB1".
 */
export class SalesOpportunityReasonsSetup extends Entity implements SalesOpportunityReasonsSetupType {
  /**
   * Technical entity name for SalesOpportunityReasonsSetup.
   */
  static _entityName = 'SalesOpportunityReasonsSetup';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SalesOpportunityReasonsSetup.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * Returns an entity builder to construct instances `SalesOpportunityReasonsSetup`.
   * @returns A builder that constructs instances of entity type `SalesOpportunityReasonsSetup`.
   */
  static builder(): EntityBuilderType<SalesOpportunityReasonsSetup, SalesOpportunityReasonsSetupTypeForceMandatory> {
    return Entity.entityBuilder(SalesOpportunityReasonsSetup);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SalesOpportunityReasonsSetup` entity type.
   * @returns A `SalesOpportunityReasonsSetup` request builder.
   */
  static requestBuilder(): SalesOpportunityReasonsSetupRequestBuilder {
    return new SalesOpportunityReasonsSetupRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesOpportunityReasonsSetup`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SalesOpportunityReasonsSetup`.
   */
  static customField(fieldName: string): CustomField<SalesOpportunityReasonsSetup> {
    return Entity.customFieldSelector(fieldName, SalesOpportunityReasonsSetup);
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

export interface SalesOpportunityReasonsSetupType {
  sequenceNo?: number;
  description?: string;
  sort?: number;
  salesOpportunities: SalesOpportunitiesType[];
}

export interface SalesOpportunityReasonsSetupTypeForceMandatory {
  sequenceNo: number;
  description: string;
  sort: number;
  salesOpportunities: SalesOpportunitiesType[];
}

export namespace SalesOpportunityReasonsSetup {
  /**
   * Static representation of the [[sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_NO: NumberField<SalesOpportunityReasonsSetup> = new NumberField('SequenceNo', SalesOpportunityReasonsSetup, 'Edm.Int32');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<SalesOpportunityReasonsSetup> = new StringField('Description', SalesOpportunityReasonsSetup, 'Edm.String');
  /**
   * Static representation of the [[sort]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SORT: NumberField<SalesOpportunityReasonsSetup> = new NumberField('Sort', SalesOpportunityReasonsSetup, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITIES: OneToManyLink<SalesOpportunityReasonsSetup, SalesOpportunities> = new OneToManyLink('SalesOpportunities', SalesOpportunityReasonsSetup, SalesOpportunities);
  /**
   * All fields of the SalesOpportunityReasonsSetup entity.
   */
  export const _allFields: Array<NumberField<SalesOpportunityReasonsSetup> | StringField<SalesOpportunityReasonsSetup> | OneToManyLink<SalesOpportunityReasonsSetup, SalesOpportunities>> = [
    SalesOpportunityReasonsSetup.SEQUENCE_NO,
    SalesOpportunityReasonsSetup.DESCRIPTION,
    SalesOpportunityReasonsSetup.SORT,
    SalesOpportunityReasonsSetup.SALES_OPPORTUNITIES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SalesOpportunityReasonsSetup> = new AllFields('*', SalesOpportunityReasonsSetup);
  /**
   * All key fields of the SalesOpportunityReasonsSetup entity.
   */
  export const _keyFields: Array<Field<SalesOpportunityReasonsSetup>> = [SalesOpportunityReasonsSetup.SEQUENCE_NO];
  /**
   * Mapping of all key field names to the respective static field property SalesOpportunityReasonsSetup.
   */
  export const _keys: { [keys: string]: Field<SalesOpportunityReasonsSetup> } = SalesOpportunityReasonsSetup._keyFields.reduce((acc: { [keys: string]: Field<SalesOpportunityReasonsSetup> }, field: Field<SalesOpportunityReasonsSetup>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
