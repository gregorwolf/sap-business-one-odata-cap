/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DocumentApprovalRequest
 */
export interface DocumentApprovalRequest {
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
 * @deprecated Since v1.6.0. Use [[DocumentApprovalRequest.build]] instead.
 */
export function createDocumentApprovalRequest(json: any): DocumentApprovalRequest {
  return DocumentApprovalRequest.build(json);
}

/**
 * DocumentApprovalRequestField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentApprovalRequestField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentApprovalRequest> {
  /**
   * Representation of the [[DocumentApprovalRequest.approvalTemplatesId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  approvalTemplatesId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ApprovalTemplatesID', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentApprovalRequest.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');

  /**
   * Creates an instance of DocumentApprovalRequestField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DocumentApprovalRequest);
  }
}

export namespace DocumentApprovalRequest {
  /**
   * Metadata information on all properties of the `DocumentApprovalRequest` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentApprovalRequest>[] = [{
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
  export function build(json: { [keys: string]: FieldType }): DocumentApprovalRequest {
    return deserializeComplexTypeV4(json, DocumentApprovalRequest);
  }
}
