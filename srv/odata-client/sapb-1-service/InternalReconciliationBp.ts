/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * InternalReconciliationBp
 */
export interface InternalReconciliationBp {
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationBp.build]] instead.
 */
export function createInternalReconciliationBp(json: any): InternalReconciliationBp {
  return InternalReconciliationBp.build(json);
}

/**
 * InternalReconciliationBpField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InternalReconciliationBpField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InternalReconciliationBp> {
  /**
   * Representation of the [[InternalReconciliationBp.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');

  /**
   * Creates an instance of InternalReconciliationBpField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, InternalReconciliationBp);
  }
}

export namespace InternalReconciliationBp {
  /**
   * Metadata information on all properties of the `InternalReconciliationBp` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InternalReconciliationBp>[] = [{
    originalName: 'BPCode',
    name: 'bpCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): InternalReconciliationBp {
    return deserializeComplexTypeV4(json, InternalReconciliationBp);
  }
}
