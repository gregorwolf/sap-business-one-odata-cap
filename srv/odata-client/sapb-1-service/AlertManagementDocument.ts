/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AlertManagementDocumentEnum } from './AlertManagementDocumentEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * AlertManagementDocument
 */
export interface AlertManagementDocument {
  /**
   * Document.
   * @nullable
   */
  document?: AlertManagementDocumentEnum;
  /**
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum;
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
export class AlertManagementDocumentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AlertManagementDocument> {
  /**
   * Representation of the [[AlertManagementDocument.document]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  document: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Document', this);
  /**
   * Representation of the [[AlertManagementDocument.active]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  active: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Active', this);

  /**
   * Creates an instance of AlertManagementDocumentField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, AlertManagementDocument);
  }
}

export namespace AlertManagementDocument {
  /**
   * Metadata information on all properties of the `AlertManagementDocument` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AlertManagementDocument>[] = [{
    originalName: 'Document',
    name: 'document',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Active',
    name: 'active',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): AlertManagementDocument {
    return deserializeComplexTypeV4(json, AlertManagementDocument);
  }
}
