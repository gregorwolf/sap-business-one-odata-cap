/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DeterminationCriteriasRequestBuilder } from './DeterminationCriteriasRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DeterminationCriterias" of service "SAPB1".
 */
export class DeterminationCriterias extends EntityV4 implements DeterminationCriteriasType {
  /**
   * Technical entity name for DeterminationCriterias.
   */
  static _entityName = 'DeterminationCriterias';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Dmc Id.
   * @nullable
   */
  dmcId?: number;
  /**
   * Determination Criteria.
   * @nullable
   */
  determinationCriteria?: string;
  /**
   * Is Active.
   * @nullable
   */
  isActive?: BoYesNoEnum;
  /**
   * Priority.
   * @nullable
   */
  priority?: number;

  /**
   * Returns an entity builder to construct instances of `DeterminationCriterias`.
   * @returns A builder that constructs instances of entity type `DeterminationCriterias`.
   */
  static builder(): EntityBuilderType<DeterminationCriterias, DeterminationCriteriasType> {
    return EntityV4.entityBuilder(DeterminationCriterias);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DeterminationCriterias` entity type.
   * @returns A `DeterminationCriterias` request builder.
   */
  static requestBuilder(): DeterminationCriteriasRequestBuilder {
    return new DeterminationCriteriasRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DeterminationCriterias`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DeterminationCriterias`.
   */
  static customField(fieldName: string): CustomFieldV4<DeterminationCriterias> {
    return EntityV4.customFieldSelector(fieldName, DeterminationCriterias);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface DeterminationCriteriasType {
  dmcId?: number | null;
  determinationCriteria?: string | null;
  isActive?: BoYesNoEnum | null;
  priority?: number | null;
}

export namespace DeterminationCriterias {
  /**
   * Static representation of the [[dmcId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DMC_ID: NumberField<DeterminationCriterias> = new NumberField('DmcId', DeterminationCriterias, 'Edm.Int32');
  /**
   * Static representation of the [[determinationCriteria]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DETERMINATION_CRITERIA: StringField<DeterminationCriterias> = new StringField('DeterminationCriteria', DeterminationCriterias, 'Edm.String');
  /**
   * Static representation of the [[isActive]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ACTIVE: EnumField<DeterminationCriterias> = new EnumField('IsActive', DeterminationCriterias);
  /**
   * Static representation of the [[priority]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIORITY: NumberField<DeterminationCriterias> = new NumberField('Priority', DeterminationCriterias, 'Edm.Int32');
  /**
   * All fields of the DeterminationCriterias entity.
   */
  export const _allFields: Array<NumberField<DeterminationCriterias> | StringField<DeterminationCriterias> | EnumField<DeterminationCriterias>> = [
    DeterminationCriterias.DMC_ID,
    DeterminationCriterias.DETERMINATION_CRITERIA,
    DeterminationCriterias.IS_ACTIVE,
    DeterminationCriterias.PRIORITY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DeterminationCriterias> = new AllFields('*', DeterminationCriterias);
  /**
   * All key fields of the DeterminationCriterias entity.
   */
  export const _keyFields: Array<Field<DeterminationCriterias>> = [DeterminationCriterias.DMC_ID];
  /**
   * Mapping of all key field names to the respective static field property DeterminationCriterias.
   */
  export const _keys: { [keys: string]: Field<DeterminationCriterias> } = DeterminationCriterias._keyFields.reduce((acc: { [keys: string]: Field<DeterminationCriterias> }, field: Field<DeterminationCriterias>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
