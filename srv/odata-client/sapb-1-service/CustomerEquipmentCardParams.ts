/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CustomerEquipmentCardParams
 */
export interface CustomerEquipmentCardParams {
  /**
   * Equipment Card Num.
   * @nullable
   */
  equipmentCardNum?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[CustomerEquipmentCardParams.build]] instead.
 */
export function createCustomerEquipmentCardParams(json: any): CustomerEquipmentCardParams {
  return CustomerEquipmentCardParams.build(json);
}

/**
 * CustomerEquipmentCardParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CustomerEquipmentCardParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CustomerEquipmentCardParams> {
  /**
   * Representation of the [[CustomerEquipmentCardParams.equipmentCardNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equipmentCardNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EquipmentCardNum', this, 'Edm.Int32');

  /**
   * Creates an instance of CustomerEquipmentCardParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CustomerEquipmentCardParams);
  }
}

export namespace CustomerEquipmentCardParams {
  /**
   * Metadata information on all properties of the `CustomerEquipmentCardParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CustomerEquipmentCardParams>[] = [{
    originalName: 'EquipmentCardNum',
    name: 'equipmentCardNum',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CustomerEquipmentCardParams {
    return deserializeComplexTypeV4(json, CustomerEquipmentCardParams);
  }
}
