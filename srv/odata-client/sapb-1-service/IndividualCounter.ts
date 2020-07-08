/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class IndividualCounterField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace IndividualCounter {
  export function build(json: { [keys: string]: FieldType }): IndividualCounter {
    return createComplexType(json, {
      DocumentEntry: (documentEntry: number) => ({ documentEntry: edmToTs(documentEntry, 'Edm.Int32') }),
      CounterID: (counterId: number) => ({ counterId: edmToTs(counterId, 'Edm.Int32') }),
      CounterName: (counterName: string) => ({ counterName: edmToTs(counterName, 'Edm.String') }),
      CounterNumber: (counterNumber: number) => ({ counterNumber: edmToTs(counterNumber, 'Edm.Int32') }),
      CounterVisualOrder: (counterVisualOrder: number) => ({ counterVisualOrder: edmToTs(counterVisualOrder, 'Edm.Int32') })
    });
  }
}
