/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EcmActionStatusData
 */
export interface EcmActionStatusData {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Report Id.
   * @nullable
   */
  reportId?: string;
  /**
   * Receiv Date.
   * @nullable
   */
  receivDate?: Moment;
  /**
   * Act Message.
   * @nullable
   */
  actMessage?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[EcmActionStatusData.build]] instead.
 */
export function createEcmActionStatusData(json: any): EcmActionStatusData {
  return EcmActionStatusData.build(json);
}

/**
 * EcmActionStatusDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EcmActionStatusDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EcmActionStatusData.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[EcmActionStatusData.reportId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ReportID', this, 'Edm.String');
  /**
   * Representation of the [[EcmActionStatusData.receivDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  receivDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ReceivDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[EcmActionStatusData.actMessage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actMessage: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ActMessage', this, 'Edm.String');
}

export namespace EcmActionStatusData {
  export function build(json: { [keys: string]: FieldType }): EcmActionStatusData {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      ReportID: (reportId: string) => ({ reportId: edmToTs(reportId, 'Edm.String') }),
      ReceivDate: (receivDate: Moment) => ({ receivDate: edmToTs(receivDate, 'Edm.DateTimeOffset') }),
      ActMessage: (actMessage: string) => ({ actMessage: edmToTs(actMessage, 'Edm.String') })
    });
  }
}
