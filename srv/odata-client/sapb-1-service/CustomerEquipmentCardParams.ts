/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class CustomerEquipmentCardParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CustomerEquipmentCardParams.equipmentCardNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equipmentCardNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EquipmentCardNum', this, 'Edm.Int32');
}

export namespace CustomerEquipmentCardParams {
  export function build(json: { [keys: string]: FieldType }): CustomerEquipmentCardParams {
    return createComplexType(json, {
      EquipmentCardNum: (equipmentCardNum: number) => ({ equipmentCardNum: edmToTs(equipmentCardNum, 'Edm.Int32') })
    });
  }
}
