/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
  /**
   * User Id.
   * @nullable
   */
  userId?: BoYesNoEnum;
  /**
   * Override.
   * @nullable
   */
  override?: BoYesNoEnum;
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
export class Attachments2LineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, Attachments2Line> {
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
  /**
   * Representation of the [[Attachments2Line.userId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userId: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('UserID', this);
  /**
   * Representation of the [[Attachments2Line.override]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  override: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Override', this);

  /**
   * Creates an instance of Attachments2LineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, Attachments2Line);
  }
}

export namespace Attachments2Line {
  /**
   * Metadata information on all properties of the `Attachments2Line` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Attachments2Line>[] = [{
    originalName: 'SourcePath',
    name: 'sourcePath',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FileName',
    name: 'fileName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FileExtension',
    name: 'fileExtension',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AttachmentDate',
    name: 'attachmentDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'UserID',
    name: 'userId',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Override',
    name: 'override',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): Attachments2Line {
    return deserializeComplexTypeV4(json, Attachments2Line);
  }
}
