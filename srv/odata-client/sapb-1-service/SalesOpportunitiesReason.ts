/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SalesOpportunitiesReason
 */
export interface SalesOpportunitiesReason {
  /**
   * Row No.
   * @nullable
   */
  rowNo?: number;
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: number;
  /**
   * Reason.
   * @nullable
   */
  reason?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesReason.build]] instead.
 */
export function createSalesOpportunitiesReason(json: any): SalesOpportunitiesReason {
  return SalesOpportunitiesReason.build(json);
}

/**
 * SalesOpportunitiesReasonField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunitiesReasonField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesOpportunitiesReason> {
  /**
   * Representation of the [[SalesOpportunitiesReason.rowNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesReason.sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequenceNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesReason.reason]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reason: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Reason', this, 'Edm.Int32');

  /**
   * Creates an instance of SalesOpportunitiesReasonField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SalesOpportunitiesReason);
  }
}

export namespace SalesOpportunitiesReason {
  /**
   * Metadata information on all properties of the `SalesOpportunitiesReason` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesOpportunitiesReason>[] = [{
    originalName: 'RowNo',
    name: 'rowNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SequenceNo',
    name: 'sequenceNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Reason',
    name: 'reason',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SalesOpportunitiesReason {
    return deserializeComplexTypeV4(json, SalesOpportunitiesReason);
  }
}
