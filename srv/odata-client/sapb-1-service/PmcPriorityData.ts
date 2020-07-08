/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PmcPriorityData
 */
export interface PmcPriorityData {
  /**
   * Priority Id.
   * @nullable
   */
  priorityId?: number;
  /**
   * Priority Name.
   * @nullable
   */
  priorityName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[PmcPriorityData.build]] instead.
 */
export function createPmcPriorityData(json: any): PmcPriorityData {
  return PmcPriorityData.build(json);
}

/**
 * PmcPriorityDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmcPriorityDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PmcPriorityData.priorityId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priorityId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PriorityID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmcPriorityData.priorityName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priorityName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PriorityName', this, 'Edm.String');
}

export namespace PmcPriorityData {
  export function build(json: { [keys: string]: FieldType }): PmcPriorityData {
    return createComplexType(json, {
      PriorityID: (priorityId: number) => ({ priorityId: edmToTs(priorityId, 'Edm.Int32') }),
      PriorityName: (priorityName: string) => ({ priorityName: edmToTs(priorityName, 'Edm.String') })
    });
  }
}
