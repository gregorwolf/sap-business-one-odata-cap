/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, Entity, FieldType, createComplexType } from '@sap-cloud-sdk/core/v4';

/**
 * ApprovalTemplateDocument
 */
export interface ApprovalTemplateDocument {
}

/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateDocument.build]] instead.
 */
export function createApprovalTemplateDocument(json: any): ApprovalTemplateDocument {
  return ApprovalTemplateDocument.build(json);
}

/**
 * ApprovalTemplateDocumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ApprovalTemplateDocumentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
}

export namespace ApprovalTemplateDocument {
  export function build(json: { [keys: string]: FieldType }): ApprovalTemplateDocument {
    return createComplexType(json, {

    });
  }
}
