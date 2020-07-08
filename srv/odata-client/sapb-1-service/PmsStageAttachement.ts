/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class PmsStageAttachementField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace PmsStageAttachement {
  export function build(json: { [keys: string]: FieldType }): PmsStageAttachement {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      LineID: (lineId: number) => ({ lineId: edmToTs(lineId, 'Edm.Int32') }),
      SourcePath: (sourcePath: string) => ({ sourcePath: edmToTs(sourcePath, 'Edm.String') }),
      FileName: (fileName: string) => ({ fileName: edmToTs(fileName, 'Edm.String') }),
      FileExtension: (fileExtension: string) => ({ fileExtension: edmToTs(fileExtension, 'Edm.String') }),
      AttachementDate: (attachementDate: Moment) => ({ attachementDate: edmToTs(attachementDate, 'Edm.DateTimeOffset') })
    });
  }
}
