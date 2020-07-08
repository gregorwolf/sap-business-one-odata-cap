/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class PathAdminField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace PathAdmin {
  export function build(json: { [keys: string]: FieldType }): PathAdmin {
    return createComplexType(json, {
      WordTemplateFolderPath: (wordTemplateFolderPath: string) => ({ wordTemplateFolderPath: edmToTs(wordTemplateFolderPath, 'Edm.String') }),
      PicturesFolderPath: (picturesFolderPath: string) => ({ picturesFolderPath: edmToTs(picturesFolderPath, 'Edm.String') }),
      AttachmentsFolderPath: (attachmentsFolderPath: string) => ({ attachmentsFolderPath: edmToTs(attachmentsFolderPath, 'Edm.String') }),
      ExtensionsFolderPath: (extensionsFolderPath: string) => ({ extensionsFolderPath: edmToTs(extensionsFolderPath, 'Edm.String') }),
      PrintId: (printId: string) => ({ printId: edmToTs(printId, 'Edm.String') })
    });
  }
}
