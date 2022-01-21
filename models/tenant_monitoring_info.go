// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// TenantMonitoringInfo tenant monitoring info
//
// swagger:model tenantMonitoringInfo
type TenantMonitoringInfo struct {

	// annotations
	Annotations []*Annotation `json:"annotations"`

	// disk capacity g b
	DiskCapacityGB string `json:"diskCapacityGB,omitempty"`

	// image
	Image string `json:"image,omitempty"`

	// init image
	InitImage string `json:"initImage,omitempty"`

	// labels
	Labels []*Label `json:"labels"`

	// monitoring CPU request
	MonitoringCPURequest string `json:"monitoringCPURequest,omitempty"`

	// monitoring mem request
	MonitoringMemRequest string `json:"monitoringMemRequest,omitempty"`

	// node selector
	NodeSelector []*NodeSelector `json:"nodeSelector"`

	// prometheus enabled
	PrometheusEnabled bool `json:"prometheusEnabled,omitempty"`

	// service account name
	ServiceAccountName string `json:"serviceAccountName,omitempty"`

	// sidecar image
	SidecarImage string `json:"sidecarImage,omitempty"`

	// storage class name
	StorageClassName string `json:"storageClassName,omitempty"`

	// toggle
	Toggle bool `json:"toggle,omitempty"`
}

// Validate validates this tenant monitoring info
func (m *TenantMonitoringInfo) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateAnnotations(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateLabels(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateNodeSelector(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *TenantMonitoringInfo) validateAnnotations(formats strfmt.Registry) error {
	if swag.IsZero(m.Annotations) { // not required
		return nil
	}

	for i := 0; i < len(m.Annotations); i++ {
		if swag.IsZero(m.Annotations[i]) { // not required
			continue
		}

		if m.Annotations[i] != nil {
			if err := m.Annotations[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("annotations" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("annotations" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *TenantMonitoringInfo) validateLabels(formats strfmt.Registry) error {
	if swag.IsZero(m.Labels) { // not required
		return nil
	}

	for i := 0; i < len(m.Labels); i++ {
		if swag.IsZero(m.Labels[i]) { // not required
			continue
		}

		if m.Labels[i] != nil {
			if err := m.Labels[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("labels" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("labels" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *TenantMonitoringInfo) validateNodeSelector(formats strfmt.Registry) error {
	if swag.IsZero(m.NodeSelector) { // not required
		return nil
	}

	for i := 0; i < len(m.NodeSelector); i++ {
		if swag.IsZero(m.NodeSelector[i]) { // not required
			continue
		}

		if m.NodeSelector[i] != nil {
			if err := m.NodeSelector[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("nodeSelector" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("nodeSelector" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// ContextValidate validate this tenant monitoring info based on the context it is used
func (m *TenantMonitoringInfo) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateAnnotations(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateLabels(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateNodeSelector(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *TenantMonitoringInfo) contextValidateAnnotations(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Annotations); i++ {

		if m.Annotations[i] != nil {
			if err := m.Annotations[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("annotations" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("annotations" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *TenantMonitoringInfo) contextValidateLabels(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Labels); i++ {

		if m.Labels[i] != nil {
			if err := m.Labels[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("labels" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("labels" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *TenantMonitoringInfo) contextValidateNodeSelector(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.NodeSelector); i++ {

		if m.NodeSelector[i] != nil {
			if err := m.NodeSelector[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("nodeSelector" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("nodeSelector" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *TenantMonitoringInfo) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *TenantMonitoringInfo) UnmarshalBinary(b []byte) error {
	var res TenantMonitoringInfo
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}