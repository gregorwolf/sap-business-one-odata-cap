/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EmployeeTransferParams
 */
export interface EmployeeTransferParams {
  /**
   * Transfer Id.
   * @nullable
   */
  transferId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[EmployeeTransferParams.build]] instead.
 */
export function createEmployeeTransferParams(json: any): EmployeeTransferParams {
  return EmployeeTransferParams.build(json);
}

/**
 * EmployeeTransferParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeTransferParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EmployeeTransferParams.transferId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TransferID', this, 'Edm.Int32');
}

export namespace EmployeeTransferParams {
  export function build(json: { [keys: string]: FieldType }): EmployeeTransferParams {
    return createComplexType(json, {
      TransferID: (transferId: number) => ({ transferId: edmToTs(transferId, 'Edm.Int32') })
    });
  }
}
