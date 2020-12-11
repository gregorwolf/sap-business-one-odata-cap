/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CounterTypeEnum } from './CounterTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TeamCounter
 */
export interface TeamCounter {
  /**
   * Document Entry.
   * @nullable
   */
  documentEntry?: number;
  /**
   * Counter Id.
   * @nullable
   */
  counterId?: number;
  /**
   * Counter Type.
   * @nullable
   */
  counterType?: CounterTypeEnum;
  /**
   * Counter Name.
   * @nullable
   */
  counterName?: string;
  /**
   * Counter Number.
   * @nullable
   */
  counterNumber?: number;
  /**
   * Counter Visual Order.
   * @nullable
   */
  counterVisualOrder?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[TeamCounter.build]] instead.
 */
export function createTeamCounter(json: any): TeamCounter {
  return TeamCounter.build(json);
}

/**
 * TeamCounterField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TeamCounterField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TeamCounter> {
  /**
   * Representation of the [[TeamCounter.documentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[TeamCounter.counterId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CounterID', this, 'Edm.Int32');
  /**
   * Representation of the [[TeamCounter.counterType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CounterType', this);
  /**
   * Representation of the [[TeamCounter.counterName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CounterName', this, 'Edm.String');
  /**
   * Representation of the [[TeamCounter.counterNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CounterNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[TeamCounter.counterVisualOrder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterVisualOrder: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CounterVisualOrder', this, 'Edm.Int32');

  /**
   * Creates an instance of TeamCounterField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TeamCounter);
  }
}

export namespace TeamCounter {
  /**
   * Metadata information on all properties of the `TeamCounter` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TeamCounter>[] = [{
    originalName: 'DocumentEntry',
    name: 'documentEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CounterID',
    name: 'counterId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CounterType',
    name: 'counterType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'CounterName',
    name: 'counterName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CounterNumber',
    name: 'counterNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CounterVisualOrder',
    name: 'counterVisualOrder',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TeamCounter {
    return deserializeComplexTypeV4(json, TeamCounter);
  }
}
