/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { EcmActionStatusEnum } from './EcmActionStatusEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Act Status.
   * @nullable
   */
  actStatus?: EcmActionStatusEnum;
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
export class EcmActionStatusDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EcmActionStatusData> {
  /**
   * Representation of the [[EcmActionStatusData.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[EcmActionStatusData.actStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actStatus: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ActStatus', this);
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

  /**
   * Creates an instance of EcmActionStatusDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EcmActionStatusData);
  }
}

export namespace EcmActionStatusData {
  /**
   * Metadata information on all properties of the `EcmActionStatusData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EcmActionStatusData>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ActStatus',
    name: 'actStatus',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ReportID',
    name: 'reportId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ReceivDate',
    name: 'receivDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ActMessage',
    name: 'actMessage',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EcmActionStatusData {
    return deserializeComplexTypeV4(json, EcmActionStatusData);
  }
}
