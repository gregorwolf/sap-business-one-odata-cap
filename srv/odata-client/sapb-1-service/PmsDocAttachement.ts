/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PmsDocAttachement
 */
export interface PmsDocAttachement {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Line Id.
   * @nullable
   */
  lineId?: number;
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
   * Attachement Date.
   * @nullable
   */
  attachementDate?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[PmsDocAttachement.build]] instead.
 */
export function createPmsDocAttachement(json: any): PmsDocAttachement {
  return PmsDocAttachement.build(json);
}

/**
 * PmsDocAttachementField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmsDocAttachementField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmsDocAttachement> {
  /**
   * Representation of the [[PmsDocAttachement.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsDocAttachement.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsDocAttachement.sourcePath]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourcePath: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SourcePath', this, 'Edm.String');
  /**
   * Representation of the [[PmsDocAttachement.fileName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fileName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FileName', this, 'Edm.String');
  /**
   * Representation of the [[PmsDocAttachement.fileExtension]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fileExtension: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FileExtension', this, 'Edm.String');
  /**
   * Representation of the [[PmsDocAttachement.attachementDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attachementDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('AttachementDate', this, 'Edm.DateTimeOffset');

  /**
   * Creates an instance of PmsDocAttachementField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmsDocAttachement);
  }
}

export namespace PmsDocAttachement {
  /**
   * Metadata information on all properties of the `PmsDocAttachement` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmsDocAttachement>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineID',
    name: 'lineId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
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
    originalName: 'AttachementDate',
    name: 'attachementDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PmsDocAttachement {
    return deserializeComplexTypeV4(json, PmsDocAttachement);
  }
}
