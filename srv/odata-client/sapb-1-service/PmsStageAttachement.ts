/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PmsStageAttachement
 */
export interface PmsStageAttachement {
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
 * @deprecated Since v1.6.0. Use [[PmsStageAttachement.build]] instead.
 */
export function createPmsStageAttachement(json: any): PmsStageAttachement {
  return PmsStageAttachement.build(json);
}

/**
 * PmsStageAttachementField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmsStageAttachementField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmsStageAttachement> {
  /**
   * Representation of the [[PmsStageAttachement.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsStageAttachement.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsStageAttachement.sourcePath]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourcePath: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SourcePath', this, 'Edm.String');
  /**
   * Representation of the [[PmsStageAttachement.fileName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fileName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FileName', this, 'Edm.String');
  /**
   * Representation of the [[PmsStageAttachement.fileExtension]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fileExtension: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FileExtension', this, 'Edm.String');
  /**
   * Representation of the [[PmsStageAttachement.attachementDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attachementDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('AttachementDate', this, 'Edm.DateTimeOffset');

  /**
   * Creates an instance of PmsStageAttachementField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmsStageAttachement);
  }
}

export namespace PmsStageAttachement {
  /**
   * Metadata information on all properties of the `PmsStageAttachement` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmsStageAttachement>[] = [{
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
  export function build(json: { [keys: string]: FieldType }): PmsStageAttachement {
    return deserializeComplexTypeV4(json, PmsStageAttachement);
  }
}
