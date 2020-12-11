/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ItemDepreciationParameter
 */
export interface ItemDepreciationParameter {
  /**
   * Fiscal Year.
   * @nullable
   */
  fiscalYear?: string;
  /**
   * Depreciation Area.
   * @nullable
   */
  depreciationArea?: string;
  /**
   * Depreciation Start Date.
   * @nullable
   */
  depreciationStartDate?: Moment;
  /**
   * Depreciation End Date.
   * @nullable
   */
  depreciationEndDate?: Moment;
  /**
   * Useful Life.
   * @nullable
   */
  usefulLife?: number;
  /**
   * Remaining Life.
   * @nullable
   */
  remainingLife?: number;
  /**
   * Depreciation Type.
   * @nullable
   */
  depreciationType?: string;
  /**
   * Total Units In Useful Life.
   * @nullable
   */
  totalUnitsInUsefulLife?: number;
  /**
   * Remaining Units.
   * @nullable
   */
  remainingUnits?: number;
  /**
   * Standard Units.
   * @nullable
   */
  standardUnits?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemDepreciationParameter.build]] instead.
 */
export function createItemDepreciationParameter(json: any): ItemDepreciationParameter {
  return ItemDepreciationParameter.build(json);
}

/**
 * ItemDepreciationParameterField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemDepreciationParameterField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemDepreciationParameter> {
  /**
   * Representation of the [[ItemDepreciationParameter.fiscalYear]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fiscalYear: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FiscalYear', this, 'Edm.String');
  /**
   * Representation of the [[ItemDepreciationParameter.depreciationArea]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationArea: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DepreciationArea', this, 'Edm.String');
  /**
   * Representation of the [[ItemDepreciationParameter.depreciationStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationStartDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DepreciationStartDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ItemDepreciationParameter.depreciationEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationEndDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DepreciationEndDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ItemDepreciationParameter.usefulLife]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  usefulLife: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UsefulLife', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemDepreciationParameter.remainingLife]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remainingLife: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RemainingLife', this, 'Edm.Double');
  /**
   * Representation of the [[ItemDepreciationParameter.depreciationType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DepreciationType', this, 'Edm.String');
  /**
   * Representation of the [[ItemDepreciationParameter.totalUnitsInUsefulLife]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalUnitsInUsefulLife: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalUnitsInUsefulLife', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemDepreciationParameter.remainingUnits]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remainingUnits: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RemainingUnits', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemDepreciationParameter.standardUnits]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  standardUnits: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StandardUnits', this, 'Edm.Int32');

  /**
   * Creates an instance of ItemDepreciationParameterField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ItemDepreciationParameter);
  }
}

export namespace ItemDepreciationParameter {
  /**
   * Metadata information on all properties of the `ItemDepreciationParameter` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemDepreciationParameter>[] = [{
    originalName: 'FiscalYear',
    name: 'fiscalYear',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DepreciationArea',
    name: 'depreciationArea',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DepreciationStartDate',
    name: 'depreciationStartDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'DepreciationEndDate',
    name: 'depreciationEndDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'UsefulLife',
    name: 'usefulLife',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'RemainingLife',
    name: 'remainingLife',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DepreciationType',
    name: 'depreciationType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TotalUnitsInUsefulLife',
    name: 'totalUnitsInUsefulLife',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'RemainingUnits',
    name: 'remainingUnits',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StandardUnits',
    name: 'standardUnits',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ItemDepreciationParameter {
    return deserializeComplexTypeV4(json, ItemDepreciationParameter);
  }
}
