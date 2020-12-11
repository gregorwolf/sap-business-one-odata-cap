/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ServiceContractParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceContractParams> {
  /**
   * Representation of the [[ServiceContractParams.contractId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contractId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ContractID', this, 'Edm.Int32');

  /**
   * Creates an instance of ServiceContractParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ServiceContractParams);
  }
}

export namespace ServiceContractParams {
  /**
   * Metadata information on all properties of the `ServiceContractParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceContractParams>[] = [{
    originalName: 'ContractID',
    name: 'contractId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ServiceContractParams {
    return deserializeComplexTypeV4(json, ServiceContractParams);
  }
}
