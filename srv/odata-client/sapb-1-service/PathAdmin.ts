/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PathAdmin
 */
export interface PathAdmin {
  /**
   * Word Template Folder Path.
   * @nullable
   */
  wordTemplateFolderPath?: string;
  /**
   * Pictures Folder Path.
   * @nullable
   */
  picturesFolderPath?: string;
  /**
   * Attachments Folder Path.
   * @nullable
   */
  attachmentsFolderPath?: string;
  /**
   * Extensions Folder Path.
   * @nullable
   */
  extensionsFolderPath?: string;
  /**
   * Print Id.
   * @nullable
   */
  printId?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[PathAdmin.build]] instead.
 */
export function createPathAdmin(json: any): PathAdmin {
  return PathAdmin.build(json);
}

/**
 * PathAdminField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PathAdminField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PathAdmin> {
  /**
   * Representation of the [[PathAdmin.wordTemplateFolderPath]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wordTemplateFolderPath: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WordTemplateFolderPath', this, 'Edm.String');
  /**
   * Representation of the [[PathAdmin.picturesFolderPath]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  picturesFolderPath: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PicturesFolderPath', this, 'Edm.String');
  /**
   * Representation of the [[PathAdmin.attachmentsFolderPath]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attachmentsFolderPath: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AttachmentsFolderPath', this, 'Edm.String');
  /**
   * Representation of the [[PathAdmin.extensionsFolderPath]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  extensionsFolderPath: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExtensionsFolderPath', this, 'Edm.String');
  /**
   * Representation of the [[PathAdmin.printId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  printId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PrintId', this, 'Edm.String');

  /**
   * Creates an instance of PathAdminField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PathAdmin);
  }
}

export namespace PathAdmin {
  /**
   * Metadata information on all properties of the `PathAdmin` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PathAdmin>[] = [{
    originalName: 'WordTemplateFolderPath',
    name: 'wordTemplateFolderPath',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PicturesFolderPath',
    name: 'picturesFolderPath',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AttachmentsFolderPath',
    name: 'attachmentsFolderPath',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ExtensionsFolderPath',
    name: 'extensionsFolderPath',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PrintId',
    name: 'printId',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PathAdmin {
    return deserializeComplexTypeV4(json, PathAdmin);
  }
}
