/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PmDocumentData
 */
export interface PmDocumentData {
  /**
   * Line Id.
   * @nullable
   */
  lineId?: number;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: number;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Doc Date.
   * @nullable
   */
  docDate?: Moment;
  /**
   * Total.
   * @nullable
   */
  total?: number;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PmDocumentData.build]] instead.
 */
export function createPmDocumentData(json: any): PmDocumentData {
  return PmDocumentData.build(json);
}

/**
 * PmDocumentDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmDocumentDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PmDocumentData.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmDocumentData.stageId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmDocumentData.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PmDocumentData.docDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DocDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PmDocumentData.total]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  total: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Total', this, 'Edm.Double');
  /**
   * Representation of the [[PmDocumentData.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
}

export namespace PmDocumentData {
  export function build(json: { [keys: string]: FieldType }): PmDocumentData {
    return createComplexType(json, {
      LineID: (lineId: number) => ({ lineId: edmToTs(lineId, 'Edm.Int32') }),
      StageID: (stageId: number) => ({ stageId: edmToTs(stageId, 'Edm.Int32') }),
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      DocDate: (docDate: Moment) => ({ docDate: edmToTs(docDate, 'Edm.DateTimeOffset') }),
      Total: (total: number) => ({ total: edmToTs(total, 'Edm.Double') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') })
    });
  }
}
