/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { IntrastatConfigurationEnum } from './IntrastatConfigurationEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * IntrastatConfigurationParams
 */
export interface IntrastatConfigurationParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Conf Type.
   * @nullable
   */
  confType?: IntrastatConfigurationEnum;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Stat Code.
   * @nullable
   */
  statCode?: string;
  /**
   * Date From.
   * @nullable
   */
  dateFrom?: Moment;
  /**
   * Date To.
   * @nullable
   */
  dateTo?: Moment;
  /**
   * Country.
   * @nullable
   */
  country?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[IntrastatConfigurationParams.build]] instead.
 */
export function createIntrastatConfigurationParams(json: any): IntrastatConfigurationParams {
  return IntrastatConfigurationParams.build(json);
}

/**
 * IntrastatConfigurationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class IntrastatConfigurationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, IntrastatConfigurationParams> {
  /**
   * Representation of the [[IntrastatConfigurationParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[IntrastatConfigurationParams.confType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  confType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ConfType', this);
  /**
   * Representation of the [[IntrastatConfigurationParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[IntrastatConfigurationParams.statCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StatCode', this, 'Edm.String');
  /**
   * Representation of the [[IntrastatConfigurationParams.dateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DateFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[IntrastatConfigurationParams.dateTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateTo: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DateTo', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[IntrastatConfigurationParams.country]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Country', this, 'Edm.String');

  /**
   * Creates an instance of IntrastatConfigurationParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, IntrastatConfigurationParams);
  }
}

export namespace IntrastatConfigurationParams {
  /**
   * Metadata information on all properties of the `IntrastatConfigurationParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<IntrastatConfigurationParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ConfType',
    name: 'confType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'StatCode',
    name: 'statCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DateFrom',
    name: 'dateFrom',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'DateTo',
    name: 'dateTo',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Country',
    name: 'country',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): IntrastatConfigurationParams {
    return deserializeComplexTypeV4(json, IntrastatConfigurationParams);
  }
}
