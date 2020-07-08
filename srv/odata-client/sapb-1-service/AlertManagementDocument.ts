/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, Entity, FieldType, createComplexType } from '@sap-cloud-sdk/core/v4';

/**
 * AlertManagementDocument
 */
export interface AlertManagementDocument {
}

/**
 * @deprecated Since v1.6.0. Use [[AlertManagementDocument.build]] instead.
 */
export function createAlertManagementDocument(json: any): AlertManagementDocument {
  return AlertManagementDocument.build(json);
}

/**
 * AlertManagementDocumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AlertManagementDocumentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
}

export namespace AlertManagementDocument {
  export function build(json: { [keys: string]: FieldType }): AlertManagementDocument {
    return createComplexType(json, {

    });
  }
}
