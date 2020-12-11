/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CommissionGroupParams
 */
export interface CommissionGroupParams {
  /**
   * Commission Group Code.
   * @nullable
   */
  commissionGroupCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[CommissionGroupParams.build]] instead.
 */
export function createCommissionGroupParams(json: any): CommissionGroupParams {
  return CommissionGroupParams.build(json);
}

/**
 * CommissionGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CommissionGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CommissionGroupParams> {
  /**
   * Representation of the [[CommissionGroupParams.commissionGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  commissionGroupCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CommissionGroupCode', this, 'Edm.Int32');

  /**
   * Creates an instance of CommissionGroupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CommissionGroupParams);
  }
}

export namespace CommissionGroupParams {
  /**
   * Metadata information on all properties of the `CommissionGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CommissionGroupParams>[] = [{
    originalName: 'CommissionGroupCode',
    name: 'commissionGroupCode',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CommissionGroupParams {
    return deserializeComplexTypeV4(json, CommissionGroupParams);
  }
}
