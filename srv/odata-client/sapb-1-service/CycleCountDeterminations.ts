/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CycleCountDeterminationsRequestBuilder } from './CycleCountDeterminationsRequestBuilder';
import { CycleCountDeterminationSetup, CycleCountDeterminationSetupField } from './CycleCountDeterminationSetup';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "CycleCountDeterminations" of service "SAPB1".
 */
export class CycleCountDeterminations extends Entity implements CycleCountDeterminationsType {
  /**
   * Technical entity name for CycleCountDeterminations.
   */
  static _entityName = 'CycleCountDeterminations';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CycleCountDeterminations.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: string;
  /**
   * Cycle Count Determination Setup Collection.
   * @nullable
   */
  cycleCountDeterminationSetupCollection?: CycleCountDeterminationSetup[];

  /**
   * Returns an entity builder to construct instances `CycleCountDeterminations`.
   * @returns A builder that constructs instances of entity type `CycleCountDeterminations`.
   */
  static builder(): EntityBuilderType<CycleCountDeterminations, CycleCountDeterminationsTypeForceMandatory> {
    return Entity.entityBuilder(CycleCountDeterminations);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CycleCountDeterminations` entity type.
   * @returns A `CycleCountDeterminations` request builder.
   */
  static requestBuilder(): CycleCountDeterminationsRequestBuilder {
    return new CycleCountDeterminationsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CycleCountDeterminations`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CycleCountDeterminations`.
   */
  static customField(fieldName: string): CustomField<CycleCountDeterminations> {
    return Entity.customFieldSelector(fieldName, CycleCountDeterminations);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CycleCountDeterminationsType {
  warehouseCode?: string;
  cycleCountDeterminationSetupCollection?: CycleCountDeterminationSetup[];
}

export interface CycleCountDeterminationsTypeForceMandatory {
  warehouseCode: string;
  cycleCountDeterminationSetupCollection: CycleCountDeterminationSetup[];
}

export namespace CycleCountDeterminations {
  /**
   * Static representation of the [[warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE_CODE: StringField<CycleCountDeterminations> = new StringField('WarehouseCode', CycleCountDeterminations, 'Edm.String');
  /**
   * Static representation of the [[cycleCountDeterminationSetupCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CYCLE_COUNT_DETERMINATION_SETUP_COLLECTION: CollectionField<CycleCountDeterminations> = new CollectionField('CycleCountDeterminationSetupCollection', CycleCountDeterminations, new CycleCountDeterminationSetupField('', CycleCountDeterminations));
  /**
   * All fields of the CycleCountDeterminations entity.
   */
  export const _allFields: Array<StringField<CycleCountDeterminations> | CollectionField<CycleCountDeterminations>> = [
    CycleCountDeterminations.WAREHOUSE_CODE,
    CycleCountDeterminations.CYCLE_COUNT_DETERMINATION_SETUP_COLLECTION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CycleCountDeterminations> = new AllFields('*', CycleCountDeterminations);
  /**
   * All key fields of the CycleCountDeterminations entity.
   */
  export const _keyFields: Array<Field<CycleCountDeterminations>> = [CycleCountDeterminations.WAREHOUSE_CODE];
  /**
   * Mapping of all key field names to the respective static field property CycleCountDeterminations.
   */
  export const _keys: { [keys: string]: Field<CycleCountDeterminations> } = CycleCountDeterminations._keyFields.reduce((acc: { [keys: string]: Field<CycleCountDeterminations> }, field: Field<CycleCountDeterminations>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
