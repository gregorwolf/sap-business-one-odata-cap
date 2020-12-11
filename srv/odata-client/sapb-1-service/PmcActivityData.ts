/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PmcActivityData
 */
export interface PmcActivityData {
  /**
   * Activity Id.
   * @nullable
   */
  activityId?: number;
  /**
   * Activity Type.
   * @nullable
   */
  activityType?: string;
  /**
   * Labor Item.
   * @nullable
   */
  laborItem?: string;
  /**
   * Is Chargeable.
   * @nullable
   */
  isChargeable?: BoYesNoEnum;
  /**
   * Is Absence.
   * @nullable
   */
  isAbsence?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[PmcActivityData.build]] instead.
 */
export function createPmcActivityData(json: any): PmcActivityData {
  return PmcActivityData.build(json);
}

/**
 * PmcActivityDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmcActivityDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmcActivityData> {
  /**
   * Representation of the [[PmcActivityData.activityId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activityId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActivityID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmcActivityData.activityType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activityType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ActivityType', this, 'Edm.String');
  /**
   * Representation of the [[PmcActivityData.laborItem]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  laborItem: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LaborItem', this, 'Edm.String');
  /**
   * Representation of the [[PmcActivityData.isChargeable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isChargeable: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsChargeable', this);
  /**
   * Representation of the [[PmcActivityData.isAbsence]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isAbsence: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsAbsence', this);

  /**
   * Creates an instance of PmcActivityDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmcActivityData);
  }
}

export namespace PmcActivityData {
  /**
   * Metadata information on all properties of the `PmcActivityData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmcActivityData>[] = [{
    originalName: 'ActivityID',
    name: 'activityId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ActivityType',
    name: 'activityType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LaborItem',
    name: 'laborItem',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'IsChargeable',
    name: 'isChargeable',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'IsAbsence',
    name: 'isAbsence',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PmcActivityData {
    return deserializeComplexTypeV4(json, PmcActivityData);
  }
}
