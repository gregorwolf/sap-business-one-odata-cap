/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * Attachments2Line
 */
export interface Attachments2Line {
  /**
   * Source Path.
   * @nullable
   */
  sourcePath?: string;
  /**
   * File Name.
   * @nullable
   */
  fileName?: string;
  /**
   * File Extension.
   * @nullable
   */
  fileExtension?: string;
  /**
   * Attachment Date.
   * @nullable
   */
  attachmentDate?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[Attachments2Line.build]] instead.
 */
export function createAttachments2Line(json: any): Attachments2Line {
  return Attachments2Line.build(json);
}

/**
 * Attachments2LineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class Attachments2LineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[Attachments2Line.sourcePath]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourcePath: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SourcePath', this, 'Edm.String');
  /**
   * Representation of the [[Attachments2Line.fileName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fileName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FileName', this, 'Edm.String');
  /**
   * Representation of the [[Attachments2Line.fileExtension]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fileExtension: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FileExtension', this, 'Edm.String');
  /**
   * Representation of the [[Attachments2Line.attachmentDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attachmentDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('AttachmentDate', this, 'Edm.DateTimeOffset');
}

export namespace Attachments2Line {
  export function build(json: { [keys: string]: FieldType }): Attachments2Line {
    return createComplexType(json, {
      SourcePath: (sourcePath: string) => ({ sourcePath: edmToTs(sourcePath, 'Edm.String') }),
      FileName: (fileName: string) => ({ fileName: edmToTs(fileName, 'Edm.String') }),
      FileExtension: (fileExtension: string) => ({ fileExtension: edmToTs(fileExtension, 'Edm.String') }),
      AttachmentDate: (attachmentDate: Moment) => ({ attachmentDate: edmToTs(attachmentDate, 'Edm.DateTimeOffset') })
    });
  }
}
