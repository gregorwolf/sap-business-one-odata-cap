/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BusinessPlaceTributaryInfo
 */
export interface BusinessPlaceTributaryInfo {
  /**
   * Bplid.
   * @nullable
   */
  bplid?: number;
  /**
   * Tributary Id.
   * @nullable
   */
  tributaryId?: number;
  /**
   * Tributary Type.
   * @nullable
   */
  tributaryType?: number;
  /**
   * Tt Start Date.
   * @nullable
   */
  ttStartDate?: Moment;
  /**
   * Tt End Date.
   * @nullable
   */
  ttEndDate?: Moment;
  /**
   * Tributary Regime Code.
   * @nullable
   */
  tributaryRegimeCode?: number;
  /**
   * Trc Start Date.
   * @nullable
   */
  trcStartDate?: Moment;
  /**
   * Trc End Date.
   * @nullable
   */
  trcEndDate?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[BusinessPlaceTributaryInfo.build]] instead.
 */
export function createBusinessPlaceTributaryInfo(json: any): BusinessPlaceTributaryInfo {
  return BusinessPlaceTributaryInfo.build(json);
}

/**
 * BusinessPlaceTributaryInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BusinessPlaceTributaryInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BusinessPlaceTributaryInfo> {
  /**
   * Representation of the [[BusinessPlaceTributaryInfo.bplid]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplid: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BPLID', this, 'Edm.Int32');
  /**
   * Representation of the [[BusinessPlaceTributaryInfo.tributaryId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tributaryId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TributaryID', this, 'Edm.Int32');
  /**
   * Representation of the [[BusinessPlaceTributaryInfo.tributaryType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tributaryType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TributaryType', this, 'Edm.Int32');
  /**
   * Representation of the [[BusinessPlaceTributaryInfo.ttStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ttStartDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('TTStartDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BusinessPlaceTributaryInfo.ttEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ttEndDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('TTEndDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BusinessPlaceTributaryInfo.tributaryRegimeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tributaryRegimeCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TributaryRegimeCode', this, 'Edm.Int32');
  /**
   * Representation of the [[BusinessPlaceTributaryInfo.trcStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trcStartDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('TRCStartDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BusinessPlaceTributaryInfo.trcEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trcEndDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('TRCEndDate', this, 'Edm.DateTimeOffset');

  /**
   * Creates an instance of BusinessPlaceTributaryInfoField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BusinessPlaceTributaryInfo);
  }
}

export namespace BusinessPlaceTributaryInfo {
  /**
   * Metadata information on all properties of the `BusinessPlaceTributaryInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BusinessPlaceTributaryInfo>[] = [{
    originalName: 'BPLID',
    name: 'bplid',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TributaryID',
    name: 'tributaryId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TributaryType',
    name: 'tributaryType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TTStartDate',
    name: 'ttStartDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'TTEndDate',
    name: 'ttEndDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'TributaryRegimeCode',
    name: 'tributaryRegimeCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TRCStartDate',
    name: 'trcStartDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'TRCEndDate',
    name: 'trcEndDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BusinessPlaceTributaryInfo {
    return deserializeComplexTypeV4(json, BusinessPlaceTributaryInfo);
  }
}
