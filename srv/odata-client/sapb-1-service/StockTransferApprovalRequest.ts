/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * StockTransferApprovalRequest
 */
export interface StockTransferApprovalRequest {
  /**
   * Approval Templates Id.
   * @nullable
   */
  approvalTemplatesId?: number;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[StockTransferApprovalRequest.build]] instead.
 */
export function createStockTransferApprovalRequest(json: any): StockTransferApprovalRequest {
  return StockTransferApprovalRequest.build(json);
}

/**
 * StockTransferApprovalRequestField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class StockTransferApprovalRequestField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, StockTransferApprovalRequest> {
  /**
   * Representation of the [[StockTransferApprovalRequest.approvalTemplatesId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  approvalTemplatesId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ApprovalTemplatesID', this, 'Edm.Int32');
  /**
   * Representation of the [[StockTransferApprovalRequest.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');

  /**
   * Creates an instance of StockTransferApprovalRequestField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, StockTransferApprovalRequest);
  }
}

export namespace StockTransferApprovalRequest {
  /**
   * Metadata information on all properties of the `StockTransferApprovalRequest` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<StockTransferApprovalRequest>[] = [{
    originalName: 'ApprovalTemplatesID',
    name: 'approvalTemplatesId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): StockTransferApprovalRequest {
    return deserializeComplexTypeV4(json, StockTransferApprovalRequest);
  }
}
