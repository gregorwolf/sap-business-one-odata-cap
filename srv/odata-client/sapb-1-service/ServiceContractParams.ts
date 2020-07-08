/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ServiceContractParams
 */
export interface ServiceContractParams {
  /**
   * Contract Id.
   * @nullable
   */
  contractId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceContractParams.build]] instead.
 */
export function createServiceContractParams(json: any): ServiceContractParams {
  return ServiceContractParams.build(json);
}

/**
 * ServiceContractParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceContractParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ServiceContractParams.contractId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contractId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ContractID', this, 'Edm.Int32');
}

export namespace ServiceContractParams {
  export function build(json: { [keys: string]: FieldType }): ServiceContractParams {
    return createComplexType(json, {
      ContractID: (contractId: number) => ({ contractId: edmToTs(contractId, 'Edm.Int32') })
    });
  }
}
