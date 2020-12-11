/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CounterTypeEnum } from './CounterTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * IndividualCounter
 */
export interface IndividualCounter {
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
 * @deprecated Since v1.6.0. Use [[IndividualCounter.build]] instead.
 */
export function createIndividualCounter(json: any): IndividualCounter {
  return IndividualCounter.build(json);
}

/**
 * IndividualCounterField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class IndividualCounterField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, IndividualCounter> {
  /**
   * Representation of the [[IndividualCounter.documentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[IndividualCounter.counterId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CounterID', this, 'Edm.Int32');
  /**
   * Representation of the [[IndividualCounter.counterType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CounterType', this);
  /**
   * Representation of the [[IndividualCounter.counterName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CounterName', this, 'Edm.String');
  /**
   * Representation of the [[IndividualCounter.counterNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CounterNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[IndividualCounter.counterVisualOrder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterVisualOrder: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CounterVisualOrder', this, 'Edm.Int32');

  /**
   * Creates an instance of IndividualCounterField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, IndividualCounter);
  }
}

export namespace IndividualCounter {
  /**
   * Metadata information on all properties of the `IndividualCounter` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<IndividualCounter>[] = [{
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
  export function build(json: { [keys: string]: FieldType }): IndividualCounter {
    return deserializeComplexTypeV4(json, IndividualCounter);
  }
}
